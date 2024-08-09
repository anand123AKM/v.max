import React from "react";
import { Button, Center, Text } from "@chakra-ui/react";
import "./App.css";
import { Heading } from "@chakra-ui/react";

function About({ theme, setTabIndex }) {
  return (
    <div>
      <Center>
        <Heading className={`ABHEAD ${theme}`}>ᴀʙᴏᴜᴛ</Heading>
      </Center>
      <h1 className={`${theme} intro`}>𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧</h1>
      <Center>
        <Text className={`${theme} text`}>
          ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴏᴜʀ ᴜsᴇʀ-ғʀɪᴇɴᴅʟʏ ᴠɪᴅᴇᴏ ᴘʟᴀᴛғᴏʀᴍ, ᴅᴇsɪɢɴᴇᴅ ᴛᴏ ʙʀɪɴɢ ʏᴏᴜ ᴀɴᴅ
          ʏᴏᴜʀ ʟᴏᴠᴇᴅ ᴏɴᴇs ᴄʟᴏsᴇʀ ᴛʜʀᴏᴜɢʜ ᴛʜᴇ ᴘᴏᴡᴇʀ ᴏғ ᴄʟᴇᴀʀ ᴀɴᴅ sᴇᴄᴜʀᴇ ᴠɪᴅᴇᴏ
          ᴄᴀʟʟs. ᴇɴᴊᴏʏ sᴛʀᴇᴀᴍɪɴɢ ᴠɪᴅᴇᴏs ғʀᴏᴍ ᴀ ᴠᴀʀɪᴇᴛʏ ᴏғ ɢᴇɴʀᴇs ᴡɪᴛʜ ᴇᴀsᴇ, ᴀʟʟ
          ғʀᴏᴍ ᴛʜᴇ ᴄᴏᴍғᴏʀᴛ ᴏғ ʏᴏᴜʀ ᴅᴇᴠɪᴄᴇ.
        </Text>
      </Center>
      <h1 className={`${theme} intro`}>𝐏𝐮𝐫𝐩𝐨𝐬𝐞</h1>
      <Center>
        <Text className={`${theme} text`}>
          ᴏᴜʀ ᴍɪssɪᴏɴ ɪs sɪᴍᴘʟᴇ: ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴄᴏɴɴᴇᴄᴛɪᴏɴ ᴛʜᴀᴛ ɢᴏᴇs ʙᴇʏᴏɴᴅ
          ᴅɪsᴛᴀɴᴄᴇs. ᴡɪᴛʜ ᴏᴜʀ ᴘʟᴀᴛғᴏʀᴍ, ʏᴏᴜ ᴄᴀɴ ᴡᴀᴛᴄʜ ᴠɪᴅᴇᴏs, ɢᴇᴛ ᴇɴᴛᴇʀᴛᴀɪɴᴇᴅ,
          ᴀɴᴅ ᴇᴀʀɴ ᴘᴏɪɴᴛs ᴛʜᴀᴛ ᴄᴀɴ ʀᴇᴅᴇᴇᴍ ᴇxᴄʟᴜsɪᴠᴇ ʀᴇᴡᴀʀᴅs. ɴᴏᴛ ᴏɴʟʏ ᴛʜᴀᴛ, ʏᴏᴜ
          ᴄᴀɴ ᴇᴀsɪʟʏ ᴄᴏɴɴᴇᴄᴛ ᴡɪᴛʜ ғʀɪᴇɴᴅs ᴀɴᴅ ғᴀᴍɪʟʏ ᴛʜʀᴏᴜɢʜ ᴏᴜʀ sᴇᴄᴜʀᴇ ᴠɪᴅᴇᴏ
          ᴄᴀʟʟs ᴀɴᴅ sʜᴀʀᴇ ʏᴏᴜʀ sᴄʀᴇᴇɴ ᴛᴏ ᴇɴᴊᴏʏ sᴘᴇᴄɪᴀʟ ᴍᴏᴍᴇɴᴛs ᴛᴏɢᴇᴛʜᴇʀ.
        </Text>
      </Center>
      <h1 className={`${theme} intro`}>𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬</h1>
      <Center>
        <Text className={`${theme} text`}>
          ᴏᴜʀ ᴘʟᴀᴛғᴏʀᴍ ɪs ʟᴏᴀᴅᴇᴅ ᴡɪᴛʜ ғᴇᴀᴛᴜʀᴇs ᴛᴏ ᴇɴʜᴀɴᴄᴇ ʏᴏᴜʀ ᴇxᴘᴇʀɪᴇɴᴄᴇ. ғʀᴏᴍ
          ᴛʜᴇ ʜᴏᴍᴇ ᴘᴀɢᴇ, ʏᴏᴜ ᴄᴀɴ ᴇxᴘʟᴏʀᴇ ᴠᴀʀɪᴏᴜs sᴇᴄᴛɪᴏɴs, sᴛʀᴇᴀᴍ ᴠɪᴅᴇᴏs ᴏɴʟɪɴᴇ,
          ᴀɴᴅ ʟᴇᴀᴠᴇ ᴄᴏᴍᴍᴇɴᴛs ᴛᴏ sʜᴀʀᴇ ʏᴏᴜʀ ᴛʜᴏᴜɢʜᴛs ᴡɪᴛʜ ᴏᴛʜᴇʀs. ᴠɪᴅᴇᴏ ᴄᴀʟʟs ᴀʀᴇ
          ᴀʟsᴏ ᴇᴀsɪʟʏ ᴀᴄᴄᴇssɪʙʟᴇ, ᴀʟʟᴏᴡɪɴɢ ʏᴏᴜ ᴛᴏ sᴛᴀʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴀɴᴅ sʜᴀʀᴇ ʟɪᴠᴇ
          ᴇxᴘᴇʀɪᴇɴᴄᴇs ᴀɴʏᴛɪᴍᴇ.
        </Text>
      </Center>
      <h1 className={`${theme} intro`}>𝐂𝐨𝐧𝐭𝐚𝐜𝐭</h1>
      <Center>
        <Text className={`${theme} text`}>
          ʜᴀᴠᴇ ᴀ ǫᴜᴇsᴛɪᴏɴ, ɪᴅᴇᴀ, ᴏʀ sᴜɢɢᴇsᴛɪᴏɴ? ᴡᴇ'ᴅ ʟᴏᴠᴇ ᴛᴏ ʜᴇᴀʀ ғʀᴏᴍ ʏᴏᴜ!
          ᴄᴏɴᴛᴀᴄᴛ ᴜs ᴅɪʀᴇᴄᴛʟʏ ᴀɴᴅ ʟᴇᴛ's ᴄʜᴀᴛ.
          <Button onClick={() => setTabIndex(1)} w={20} h={5} ml={5}>
            ᴍᴇssᴀɢᴇ ᴜs
          </Button>
        </Text>
      </Center>
    </div>
  );
}

export default About;
