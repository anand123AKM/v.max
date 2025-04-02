import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import VideoCall from "./videoCall";
import UploadVideo2 from "./UploadVideo2";
import Chat from "./Chat";

function Vchat({ theme }) {
  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="green" defaultIndex={1}>
        <Center>
          <TabList className="ml" mb={3} mt={12}>
            <Tab mr={2} className="tabB tab1234">
              CHAT
            </Tab>
            <Tab className="tabB">V-CALL</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <Chat theme={theme} />
          </TabPanel>
          <TabPanel>
            <VideoCall theme={theme} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Vchat;
