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
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

function Profile({ theme, setTabIndex }) {
  const name = useContext(NameContext);
  const { points } = useContext(PointsContext);
  const { nameValue } = useContext(NameContextE);
  const { emailValue } = useContext(EmailContext);

  const [storedName, setStoredName] = useState("");
  const [storedPoints, setStoredPoints] = useState(0);

  const loginDropDown = () => {
    console.log("Login Drop Down");
  };

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
    if (localName) setStoredName(localName);
    if (localPoints) setStoredPoints(localPoints);
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
        console.log("User data fetched: ", userDoc);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setStoredName(user.displayName);
          nameValue(user.displayName);
          console.log(storedName);
          setStoredPoints(userData.points || 0);
          console.log("User data fetched successfully:", userData);
        } else {
          console.log("No such document!");
          setStoredName(user.displayName);
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
      joinedOn: "2021-09-01T00:00:00.000Z",
    },
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <AvatarGroup onClick={loginDropDown} ml={2}>
            {CurrentUser ? (
              <div className={`channel-logo ${theme}`}>
                <>{CurrentUser?.result.Name.charAt(0).toUpperCase()}</>
              </div>
            ) : (
              <>
                <Avatar bg="teal.500" />
              </>
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
              {CurrentUser ? CurrentUser?.result.Name : "Guest"}
            </MenuItem>
            <MenuItem backgroundColor={"lightblue"}>
              Points
              <span className={`${theme} points`}>
                {points || storedPoints}
              </span>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="options">
            <MenuItem backgroundColor={"lightblue"}>
              <h4 onClick={() => setTabIndex(3)}>Login</h4>
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
