import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { PointsContext } from "./PointsContext";
import { NameContext } from "./NameContext";
import { getAuth, signOut } from "firebase/auth";
import { NameContextE } from "./NameContextE";
import { EmailContext } from "./NameContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "./firebase"; // Make sure your firebase config is correctly imported

function Profile({ theme, setTabIndex }) {
  const name = useContext(NameContext);
  const { points } = useContext(PointsContext);
  const { nameValue } = useContext(NameContextE);
  const { emailValue } = useContext(EmailContext);
  const [fanbase, setFanbase] = useState(0);
  const [storedName, setStoredName] = useState("");
  const [storedPoints, setStoredPoints] = useState(0);
  const [profileImageUrl, setProfileImageUrl] = useState("");

  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setTabIndex(3);
      })
      .catch((error) => {
        console.error("Error during sign out: ", error);
      });
  };

  const handleLogoutE = () => {
    localStorage.removeItem("userData");
    setTabIndex(3);
  };

  useEffect(() => {
    const localName = localStorage.getItem("name");
    const localPoints = localStorage.getItem("points");
    const localProfileImageUrl = localStorage.getItem("profileImageUrl");
    if (localName) setStoredName(localName);
    if (localPoints) setStoredPoints(localPoints);
    if (localProfileImageUrl) setProfileImageUrl(localProfileImageUrl);
  }, []);

  useEffect(() => {
    if (name || nameValue) localStorage.setItem("name", name || nameValue);
    if (points) localStorage.setItem("points", points);
  }, [name, nameValue, points]);

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
            user.displayName || userData.displayName || "Anonymous"
          );
          setProfileImageUrl(userData.profileImageUrl || "");
          nameValue(user.displayName || userData.displayName);
          console.log("User data fetched successfully:", userData);
        } else {
          setStoredName(user.displayName || "Anonymous");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [auth.currentUser]);

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

          // setFanbase(userData.fanbase);
        } else {
          setStoredName(user.displayName || user.email || "Anonymous");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [auth.currentUser]);

  const CurrentUser = {
    result: {
      Name: storedName,
      profileImageUrl,
      joinedOn: "2021-09-01T00:00:00.000Z",
    },
  };

  // Function to handle image file selection and upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const user = auth.currentUser;
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }

    const storageRef = ref(storage, `profile-pictures/${user.uid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Error uploading file: ", error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setProfileImageUrl(downloadURL);
        localStorage.setItem("profileImageUrl", downloadURL);

        const userDocRef = doc(db, "users", user.uid);

        // Try to get the document first
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          // If the document exists, update it
          try {
            await updateDoc(userDocRef, {
              profileImageUrl: downloadURL, // Update Firestore with the image URL
            });
            console.log("Profile image uploaded and updated in Firestore.");
          } catch (error) {
            console.error("Error updating user profile in Firestore: ", error);
          }
        } else {
          // If the document does not exist, create it
          try {
            await setDoc(userDocRef, {
              name: storedName || "Anonymous",
              email: user.email,
              profileImageUrl: downloadURL,

              // Add the new profile image URL
            });
            console.log("Profile document created and image uploaded.");
          } catch (error) {
            console.error("Error creating user profile in Firestore: ", error);
          }
        }
      }
    );
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <AvatarGroup onClick={() => console.log("Login Drop Down")} ml={2}>
            {CurrentUser.result.profileImageUrl ? (
              <Avatar src={CurrentUser.result.profileImageUrl} />
            ) : (
              <div className={`channel-logo ${theme}`}>
                {CurrentUser.result.Name.charAt(0).toUpperCase()}
              </div>
            )}
          </AvatarGroup>
        </MenuButton>
        <MenuList
          color={"black"}
          backgroundColor={"lightblue"}
          textAlign={"left"}
        >
          <MenuGroup title="Profile">
            <MenuItem backgroundColor={"lightblue"}>
              {CurrentUser.result.Name || "Guest"}
            </MenuItem>
            <MenuItem backgroundColor={"lightblue"}>
              Your Fanbase
              <span className={`${theme} points`}>{fanbase}</span>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Options">
            <MenuItem backgroundColor={"lightblue"}>
              <input
                id="file-input"
                className="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <label htmlFor="file-input" className={`custom-file-input2 `}>
                {"Add Profile Pic"}
              </label>
            </MenuItem>
            <MenuItem backgroundColor={"lightblue"}>
              <h4
                onClick={() => {
                  handleLogout();
                  handleLogoutE();
                }}
              >
                Log Out
              </h4>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}

export default Profile;
