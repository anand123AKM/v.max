import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Footer from "./Footer";

import dark from "./image/logo.png";
import light from "./image/logo-2.png";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Profile from "./profile";
import Login from "./Login";
import { PointsContext } from "./PointsContext";
// import { Switch } from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";

function Navbar({ theme, setTheme }) {
  const [points, setPoints] = useState(0);
  const handlePointsChange = (newPoints) => {
    setPoints((prevPoints) => prevPoints + newPoints);
  };
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div>
        <PointsContext.Provider value={{ points, handlePointsChange }}>
          <Tabs
            align="end"
            variant="soft-rounded"
            color="darkblue"
            index={tabIndex}
            onChange={(index) => setTabIndex(index)}
          >
            <Flex className={`header1  ${theme}`} justify="space-between" p={3}>
              <Heading className={`header2  ${theme}`}>
                <img src={theme === "light" ? light : dark} alt="Logo" />
              </Heading>

              <TabList className={`${theme} tablist`}>
                <MdLightMode
                  className="lightmode"
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                />
                <Tab className={`${theme} col`}>Home</Tab>
                <Tab className={`${theme} col`}>Contact</Tab>
                <Tab className={`${theme} col`}>About </Tab>
                <Profile theme={theme} setTabIndex={setTabIndex} />
              </TabList>
            </Flex>
            <TabPanels>
              <TabPanel>
                <Home theme={theme} />
              </TabPanel>
              <TabPanel>
                <Contact theme={theme} />
              </TabPanel>
              <TabPanel>
                <About setTabIndex={setTabIndex} theme={theme} />
              </TabPanel>
              <TabPanel>
                <Login theme={theme} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PointsContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default Navbar;
