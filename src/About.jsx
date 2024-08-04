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
          𝔄 𝔰𝔦𝔪𝔭𝔩𝔢 𝔳𝔦𝔡𝔢𝔬 𝔭𝔩𝔞𝔶𝔢𝔯 𝔴𝔢𝔟𝔰𝔦𝔱𝔢 𝔴𝔥𝔢𝔯𝔢 𝔢𝔳𝔢𝔯𝔶𝔬𝔫𝔢 𝔠𝔞𝔫 𝔰𝔢𝔢 𝔡𝔦𝔣𝔣𝔢𝔯𝔢𝔫𝔱 𝔳𝔦𝔡𝔢𝔬𝔰.
          𝔜𝔬𝔲 𝔠𝔞𝔫 𝔞𝔩𝔰𝔬 𝔪𝔞𝔨𝔢 𝔞 𝔳𝔦𝔡𝔢𝔬 𝔠𝔞𝔩𝔩 𝔴𝔦𝔱𝔥 𝔶𝔬𝔲𝔯 𝔣𝔯𝔦𝔢𝔫𝔡𝔰 𝔞𝔫𝔡 𝔣𝔞𝔪𝔦𝔩𝔶.
        </Text>
      </Center>
      <h1 className={`${theme} intro`}>𝐏𝐮𝐫𝐩𝐨𝐬𝐞</h1>
      <Center>
        <Text className={`${theme} text`}>
          𝔒𝔲𝔯 𝔪𝔦𝔰𝔰𝔦𝔬𝔫 𝔦𝔰 𝔱𝔬 𝔭𝔯𝔬𝔳𝔦𝔡𝔢 𝔞 𝔤𝔬𝔬𝔡 𝔭𝔩𝔞𝔱𝔣𝔬𝔯𝔪 𝔱𝔬 𝔴𝔞𝔱𝔠𝔥 𝔳𝔦𝔡𝔢𝔬𝔰 𝔞𝔫𝔡 𝔢𝔞𝔯𝔫
          𝔭𝔬𝔦𝔫𝔱𝔰 , 𝔶𝔬𝔲 𝔠𝔞𝔫 𝔞𝔩𝔰𝔬 𝔪𝔞𝔨𝔢 𝔳𝔦𝔡𝔢𝔬 𝔠𝔞𝔩𝔩 𝔱𝔬 𝔶𝔬𝔲𝔯 𝔣𝔯𝔦𝔢𝔫𝔡𝔰 𝔞𝔫𝔡 𝔰𝔥𝔞𝔯𝔢 𝔶𝔬𝔲𝔯
          𝔰𝔠𝔯𝔢𝔢𝔫 𝔞𝔫𝔡 𝔢𝔫𝔧𝔬𝔶 𝔱𝔬𝔤𝔢𝔱𝔥𝔢𝔯.
        </Text>
      </Center>
      <h1 className={`${theme} intro`}>𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬</h1>
      <Center>
        <Text className={`${theme} text`}>
          𝔶𝔬𝔲 𝔠𝔞𝔫 𝔣𝔦𝔫𝔡 𝔪𝔲𝔩𝔱𝔦𝔭𝔩𝔢 𝔰𝔢𝔠𝔱𝔦𝔬𝔫𝔰 𝔦𝔫 𝔱𝔥𝔢 𝔴𝔢𝔟𝔰𝔦𝔱𝔢 𝔬𝔫 𝔱𝔥𝔢 ℌ𝔬𝔪𝔢 𝔭𝔞𝔤𝔢 𝔶𝔬𝔲 𝔠𝔞𝔫
          𝔰𝔢𝔢 𝔳𝔦𝔡𝔢𝔬𝔰 𝔬𝔫𝔩𝔦𝔫𝔢 & 𝔠𝔬𝔪𝔪𝔢𝔫𝔱 𝔟𝔢𝔩𝔬𝔴 𝔱𝔥𝔢 𝔳𝔦𝔡𝔢𝔬𝔰 𝔞𝔫𝔡 𝔞𝔩𝔰𝔬 𝔪𝔞𝔨𝔢 𝔳𝔦𝔡𝔢𝔬 𝔠𝔞𝔩𝔩𝔰
        </Text>
      </Center>
      <h1 className={`${theme} intro`}>𝐜𝐨𝐧𝐭𝐚𝐜𝐭</h1>
      <Center>
        <Text className={`${theme} text`}>
          𝔦𝔣 𝔶𝔬𝔲 𝔥𝔞𝔳𝔢 𝔞𝔫𝔶 𝔰𝔲𝔤𝔤𝔢𝔰𝔱𝔦𝔬𝔫𝔰 𝔣𝔬𝔯 𝔲𝔰 𝔬𝔯 𝔞𝔫𝔶 𝔮𝔲𝔢𝔯𝔶 𝔭𝔩𝔢𝔞𝔰𝔢 𝔠𝔬𝔫𝔱𝔞𝔠𝔱 𝔲𝔰
          𝔥𝔢𝔯𝔢.
          <Button onClick={() => setTabIndex(1)} w={20} h={5} ml={5}>
            𝔪𝔢𝔰𝔰𝔞𝔤𝔢
          </Button>
        </Text>
      </Center>
    </div>
  );
}

export default About;
