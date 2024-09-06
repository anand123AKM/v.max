import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import { AuthContext } from "./AuthContext.jsx";
import Login from "./Login.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, collection, doc, getDoc } from "./firebase";
import { NameContext } from "./NameContext.jsx";
import { NameContextE } from "./NameContextE.jsx";
import { EmailContext } from "./NameContext.jsx";

function App() {
  const [emailValue, SetemailValue] = useState("");
  const [nameValue, SetnameValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isMaintenanceTime, setIsMaintenanceTime] = useState(false);

  useEffect(() => {
    const redirectToBrowser = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const inIframe = window.self !== window.top;
      const inApp = /FBAN|FBAV|Instagram|LinkedIn|Twitter/i.test(userAgent);
      if (inIframe || inApp) {
        const url = "https://v-max.netlify.app";
        if (/android/i.test(userAgent)) {
          window.location.href = url;
        } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
          window.location.href = url;
          setTimeout(() => {
            window.location.href = "https://v-max.netlify.app";
          }, 25);
        } else {
          window.location.href = url;
        }
      }
    };

    redirectToBrowser();
  }, []);

  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserId(user.uid);
        const usersCollection = collection(db, "users");
        const userDoc = doc(usersCollection, user.uid);
        const userDocSnap = await getDoc(userDoc);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setName(userData.name);
        }
      } else {
        setIsLoggedIn(false);
        setUserId(null);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get("https://ipapi.co/json/");
        const location = res.data.region;
        console.log("Location: ", location);
        const southIndianStates = [
          "Tamil Nadu",
          "Kerala",
          "Karnataka",
          "Andhra Pradesh",
          "Telangana",
        ];

        const date = new Date();
        const currentHour = date.getHours();
        console.log("Current hour: ", currentHour);
        if (
          southIndianStates.includes(location) &&
          currentHour >= 10 &&
          currentHour < 12
        ) {
          setTheme("light");
        } else if (currentHour === 23) {
          setIsMaintenanceTime(true);
        } else {
          setTheme("dark");
        }
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <EmailContext.Provider value={{ emailValue, SetemailValue }}>
      <NameContextE.Provider value={{ nameValue, SetnameValue }}>
        <NameContext.Provider value={name}>
          <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <div className={`main-div ${theme}`}>
              {isLoggedIn ? (
                <Navbar setTheme={setTheme} theme={theme} />
              ) : (
                <div className="log">
                  <Login theme={theme} />
                </div>
              )}
            </div>
          </AuthContext.Provider>
        </NameContext.Provider>
      </NameContextE.Provider>
    </EmailContext.Provider>
  );
}

export default App;
