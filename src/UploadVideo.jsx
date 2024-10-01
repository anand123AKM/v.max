import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, collection, doc, setDoc, getDocs } from "./firebase";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import "./Shorts.css";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import VideoUploadWithDetails1 from "./UploadVideo1";
import UploadVideo2 from "./UploadVideo2";

const VideoUploadWithDetails = ({ theme }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoURL, setVideoURL] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth(); // Initialize Firebase Auth

  useEffect(() => {
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
        console.error("Error fetching videos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > 25 * 1024 * 1024) {
      setError("File size exceeds the 25 MB limit.");
      alert("File size exceeds the 25 MB limit");
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
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    if (title.length > 20) {
      setError("Title cannot exceed 20 characters.");
      return;
    }

    if (!file) return;

    const currentUser = auth.currentUser; // Get the current user

    if (!currentUser) {
      setError("You must be logged in to upload a video.");
      return;
    }

    const uploaderName =
      currentUser.displayName || currentUser.email || "Anonymous"; // Get uploader name or email

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
            uploaderId: currentUser.uid, // Optionally, include uploader's ID
          });
          fetchVideos();
        } catch (uploadError) {
          console.error("Error while setting video data: ", uploadError);
          setError("Error while saving video data. Please try again.");
        }
      }
    );
  };

  const portraitVideos = videos.filter(
    (video) => video.aspectRatio === "portrait"
  );
  const otherVideos = videos.filter(
    (video) => video.aspectRatio !== "portrait"
  );

  return (
    <>
      <div>
        <h2 className={`upl1 ${theme} `}>UPLOAD VIDEO</h2>
        <input
          className={`upl2 ${theme} `}
          type="text"
          placeholder="Title (Max 20 characters)"
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= 20) {
              setTitle(e.target.value);
            }
          }}
        />
        <div className="upvdl">
          <input
            id="file-input1"
            className="file-input"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
          />
          <label htmlFor="file-input1" className={`custom-file-input `}>
            {file ? file.name : "Choose File"}
          </label>
          <button
            className="upvidob"
            onClick={handleUpload}
            disabled={!title.trim() || !file}
          >
            Upload
          </button>
        </div>

        <div className={`upvidop ${theme}`}>
          Upload Progress: {uploadProgress}%
        </div>
        {videoURL && (
          <div>
            <video className="instv" controls src={videoURL} />
          </div>
        )}
      </div>

      <Tabs variant="soft-rounded" colorScheme="green" defaultIndex={1}>
        <Center>
          <TabList className="ml" mb={3} mt={12}>
            <Tab mr={2} className="tabB tab1234">
              VIDEOS
            </Tab>
            <Tab className="tabB">V-MIN</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <UploadVideo2 theme={theme} />
          </TabPanel>
          <TabPanel>
            <VideoUploadWithDetails1 theme={theme} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default VideoUploadWithDetails;
