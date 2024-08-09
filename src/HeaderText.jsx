import React from "react";
import { Heading, Text, Center, Img } from "@chakra-ui/react";
import "./App.css";
import dark from "./image/logo2.png";
import light from "./image/logo3.png";
import Slideshow from "./Slider";

function HeaderText({ theme }) {
  return (
    <>
      <Heading className="logo-7">
        <Img src={theme === "light" ? light : dark} alt="logo" />
      </Heading>
      <Center>
        <Text className="text">
          ᴀ ꜱɪᴍᴘʟᴇ <span className="s">ᴠɪᴅᴇᴏ ᴄᴀʟʟɪɴɢ & ᴠɪᴅᴇᴏ ᴘʟᴀʏᴇʀ</span>
          ᴡᴇʙꜱɪᴛᴇ ᴡʜᴇʀᴇ ʏᴏᴜ ᴄᴀɴ ᴄᴏɴɴᴇᴄᴛ ᴛᴏ ʏᴏᴜʀ
          <span className="v"> ꜰʀɪᴇɴᴅꜱ </span>ᴀɴᴅ
          <span className="v"> ꜰᴀᴍɪʟʏ</span> ᴡɪᴛʜ ᴏɴᴇ ᴄʟɪᴄᴋ ᴀɴᴅ ᴇxᴘᴇʀɪᴇɴᴄᴇ
          ᴄʀʏꜱᴛᴀʟ-ᴄʟᴇᴀʀ ᴠɪᴅᴇᴏ ᴄᴀʟʟꜱ ᴛʜᴀᴛ ʙʀɪɴɢ ʏᴏᴜ ᴄʟᴏꜱᴇʀ.
        </Text>
      </Center>
      <Center>
        <Slideshow />
      </Center>
    </>
  );
}

export default HeaderText;
