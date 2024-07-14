// import React, { useContext, useEffect } from "react";
// import {
//   Avatar,
//   AvatarGroup,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuGroup,
//   MenuItem,
//   MenuList,
// } from "@chakra-ui/react";
// import { PointsContext } from "./PointsContext";
// import { NameContext } from "./NameContext";
// import { getAuth, signOut } from "firebase/auth";
// import { NameContextE } from "./NameContextE";
// import { EmailContext } from "./NameContext";

// function Profile({ theme, setTabIndex }) {
//   const name = useContext(NameContext);
//   const { points } = useContext(PointsContext);
//   const { nameValue } = useContext(NameContextE);
//   const { emailValue } = useContext(EmailContext);

//   const CurrentUser = {
//     result: {
//       Name: name || nameValue,
//       joinedOn: "2021-09-01T00:00:00.000Z",
//     },
//   };

//   const loginDropDown = () => {
//     console.log("Login Drop Down");
//   };

//   const auth = getAuth();

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         setTabIndex(3);
//       })
//       .catch((error) => {
//         console.error("Error during sign out: ", error);
//       });
//   };

//   const handleLogoutE = () => {
//     localStorage.removeItem("userData");
//     setTabIndex(3);
//   };

//   fetch("http://localhost:3000/verify-otp")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       data.forEach((user) => {
//         const email = user.email;
//         console.log(email);
//         if (email === emailValue) {
//           console.log("Email found");
//         } else {
//           console.log("Email not found");
//         }
//       });
//     })
//     .catch((error) => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error
//       );
//     });

//   return (
//     <>
//       <Menu>
//         <MenuButton>
//           <AvatarGroup onClick={loginDropDown} ml={2}>
//             {CurrentUser ? (
//               <div className={`channel-logo ${theme}`}>
//                 <>{CurrentUser?.result.Name.charAt(0).toUpperCase()}</>
//               </div>
//             ) : (
//               <>
//                 <Avatar bg="teal.500" />
//               </>
//             )}
//           </AvatarGroup>
//         </MenuButton>
//         <MenuList
//           color={"black"}
//           backgroundColor={"lightblue"}
//           textAlign={"left"}
//         >
//           <MenuGroup title="Profile">
//             <MenuItem backgroundColor={"lightblue"}>
//               {CurrentUser ? CurrentUser?.result.Name : "Guest"}
//             </MenuItem>
//             <MenuItem backgroundColor={"lightblue"}>
//               Points
//               <span className={`${theme} points`}>{points}</span>
//             </MenuItem>
//           </MenuGroup>
//           <MenuDivider />
//           <MenuGroup title="options">
//             <MenuItem backgroundColor={"lightblue"}>
//               <h4 onClick={() => setTabIndex(3)}>Login</h4>
//             </MenuItem>
//             <MenuItem backgroundColor={"lightblue"}>
//               <h4
//                 onClick={() => {
//                   handleLogout();
//                   handleLogoutE();
//                 }}
//               >
//                 Log Out
//               </h4>
//             </MenuItem>
//           </MenuGroup>
//         </MenuList>
//       </Menu>
//     </>
//   );
// }

// export default Profile;

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

function Profile({ theme, setTabIndex }) {
  const name = useContext(NameContext);
  const { points } = useContext(PointsContext);
  const { nameValue } = useContext(NameContextE);
  const { emailValue } = useContext(EmailContext);

  const [storedName, setStoredName] = useState("");
  const [storedPoints, setStoredPoints] = useState(0);

  const CurrentUser = {
    result: {
      Name: name || nameValue || storedName,
      joinedOn: "2021-09-01T00:00:00.000Z",
    },
  };

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
