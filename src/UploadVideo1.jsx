import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  storage,
  db,
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
} from "./firebase";
import "./Shorts.css";
import { getAuth } from "firebase/auth";

function UploadVideo1({ theme }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoURL, setVideoURL] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [storedName, setStoredName] = useState("");
  const auth = getAuth();

  // Fetch user information from Firebase Auth and Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setStoredName(
            user.displayName ||
              userData.displayName ||
              user.email ||
              "Anonymous"
          );
        } else {
          setStoredName(user.displayName || user.email || "Anonymous");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [auth.currentUser]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > 25 * 1024 * 1024) {
      setError("File size exceeds the 25 MB limit.");
      setFile(null);
    } else {
      setError("");
      setFile(selectedFile);
    }
  };

  const getAspectRatio = (videoFile) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.src = URL.createObjectURL(videoFile);
      video.addEventListener(
        "loadedmetadata",
        () => {
          const aspectRatio = video.videoWidth / video.videoHeight;
          URL.revokeObjectURL(video.src);
          resolve(aspectRatio);
        },
        { once: true }
      );
      video.addEventListener("error", (e) => {
        reject(e);
      });
    });
  };

  const handleUpload = async () => {
    if (!file) return;

    const user = auth.currentUser;
    if (!user) {
      setError("You must be logged in to upload a video.");
      return;
    }

    const uploaderName =
      storedName || user.displayName || user.email || "Anonymous";

    const storageRef = ref(storage, `videos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload failed: ", error);
        setError("Upload failed. Please try again.");
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setVideoURL(downloadURL);
          console.log("Video available at", downloadURL);

          const aspectRatio = await getAspectRatio(file);
          const ratioType = aspectRatio >= 1.7 ? "landscape" : "portrait";

          await setDoc(doc(db, "videos", file.name), {
            title,
            description,
            videoURL: downloadURL,
            aspectRatio: ratioType,
            uploader: uploaderName, // Include uploader's name
            uploaderId: user.uid, // Optionally, include uploader's ID
          });

          fetchVideos(); // Refetch videos to update the list
        } catch (uploadError) {
          console.error("Error while setting video data: ", uploadError);
          setError("Error while saving video data. Please try again.");
        }
      }
    );
  };

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const videosRef = collection(db, "videos");
      const snapshot = await getDocs(videosRef);
      const videoList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoList);
    } catch (error) {
      setError("Error fetching videos: " + error.message);
      console.error("Error fetching videos: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const portraitVideos = videos.filter(
    (video) => video.aspectRatio === "portrait"
  );

  return (
    <div>
      {loading ? (
        <p
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Loading videos...
        </p>
      ) : portraitVideos.length > 0 ? (
        <div className="vido123">
          {portraitVideos.map((video) => (
            <div className="vido">
              <div className="vido1" key={video.id}>
                <video className="vcx" controls src={video.videoURL} />
                <h3 className={`vidtitle123 vidtitle ${theme}`}>
                  <span className={`channel-logo channel12 ${theme}`}>
                    {video.uploader?.charAt(0).toUpperCase()}{" "}
                    {/* Display uploader's initial */}
                  </span>
                  <span className="mg"> {video.title}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          V-MIN not available
        </p>
      )}
    </div>
  );
}

export default UploadVideo1;
