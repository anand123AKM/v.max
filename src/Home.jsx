import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import PhoneV from "./PhoneV";
import "./App.css";
import HeaderText from "./HeaderText";

function Home({ theme }) {
  return (
    <>
      <HeaderText theme={theme} />
      <Tabs variant="soft-rounded" colorScheme="red" defaultIndex={0}>
        <TabList className="ml" mb={6} mt={10}>
          <Tab className="tabB">WATCH👇 </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PhoneV theme={theme} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Home;
