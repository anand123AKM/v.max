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
      <h1
        className={`${theme} intro`}
        style={{ fontFamily: "'UnifrakturCook', cursive" }}
      >
        𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧
      </h1>
      <Center>
        <Text
          className={`${theme} text`}
          style={{ fontFamily: "'UnifrakturCook', cursive" }}
        >
          𝔴𝔢𝔩𝔠𝔬𝔪𝔢 𝔱𝔬 𝔬𝔲𝔯 𝔲𝔰𝔢𝔯-𝔣𝔯𝔦𝔢𝔫𝔡𝔩𝔶 𝔳𝔦𝔡𝔢𝔬 𝔭𝔩𝔞𝔶𝔢𝔯, 𝔡𝔢𝔰𝔦𝔤𝔫𝔢𝔡 𝔱𝔬 𝔟𝔯𝔦𝔫𝔤 𝔶𝔬𝔲 𝔞𝔫𝔡
          𝔶𝔬𝔲𝔯 𝔩𝔬𝔳𝔢𝔡 𝔬𝔫𝔢𝔰 𝔠𝔩𝔬𝔰𝔢𝔯 𝔱𝔥𝔯𝔬𝔲𝔤𝔥 𝔱𝔥𝔢 𝔭𝔬𝔴𝔢𝔯 𝔬𝔫𝔠𝔩𝔞𝔯 𝔞𝔫𝔡 𝔰𝔢𝔠𝔲𝔯𝔢 𝔳𝔦𝔡𝔢𝔬
          𝔠𝔞𝔩𝔩𝔰. 𝔢𝔫𝔧𝔬𝔶 𝔰𝔱𝔯𝔢𝔞𝔪𝔦𝔫𝔤 𝔳𝔦𝔡𝔢𝔬𝔰 𝔣𝔯𝔬𝔪 𝔞 𝔳𝔞𝔯𝔦𝔢𝔱𝔶 𝔬𝔫𝔣 𝔤𝔢𝔫𝔯𝔢𝔰 𝔴𝔦𝔱𝔥 𝔢𝔞𝔰𝔢, 𝔞𝔩𝔩
          𝔣𝔯𝔬𝔪 𝔱𝔥𝔢 𝔠𝔬𝔪𝔣𝔬𝔯𝔱 𝔬𝔣 𝔶𝔬𝔲𝔯 𝔡𝔢𝔳𝔦𝔠𝔢.
        </Text>
      </Center>
      <h1
        className={`${theme} intro`}
        style={{ fontFamily: "'UnifrakturCook', cursive" }}
      >
        𝐏𝐮𝐫𝐩𝐨𝐬𝐞
      </h1>
      <Center>
        <Text
          className={`${theme} text`}
          style={{ fontFamily: "'UnifrakturCook', cursive" }}
        >
          𝔬𝔲𝔯 𝔪𝔦𝔰𝔰𝔦𝔬𝔫 𝔦𝔰 𝔰𝔦𝔪𝔭𝔩𝔢: 𝔱𝔬 𝔠𝔯𝔢𝔞𝔱𝔢 𝔞 𝔠𝔬𝔫𝔫𝔢𝔠𝔱𝔦𝔬𝔫 𝔱𝔥𝔞𝔱 𝔤𝔬𝔢𝔰 𝔟𝔢𝔶𝑜𝔫𝔡
          𝔡𝔦𝔰𝔱𝔞𝔫𝔠𝔢𝔰. 𝔴𝔦𝔱𝔥 𝔬𝔲𝔯 𝔭𝔩𝔞𝔱𝔣𝔬𝔯𝔪, 𝔶𝔬𝔲 𝔠𝔞𝔫 𝔴𝔞𝔱𝔠𝔥 𝔳𝔦𝔡𝔢𝔬𝔰, 𝔤𝔢𝔱 𝔢𝔫𝔱𝔢𝔯𝔱𝔞𝔦𝔫𝔢𝔡,
          𝔞𝔫𝔡 𝔢𝔞𝔯𝔫 𝔭𝔬𝔦𝔫𝔱𝔰 𝔱𝔥𝔞𝔱 𝔠𝔞𝔫 𝔯𝔢𝔡𝔢𝔢𝔪 𝔢𝔵𝔠𝔩𝔲𝔰𝔦𝔳𝔢 𝔯𝔢𝔴𝔞𝔯𝔡𝔰. 𝔫𝔬𝔱 𝔬𝔫𝔩𝔶 𝔱𝔥𝔞𝔱, 𝔶𝔬𝔲
          𝔠𝔞𝔫 𝔢𝔞𝔰𝔦𝔩𝔶 𝔠𝔬𝔫𝔫𝔢𝔠𝔱 𝔴𝓎𝔳 𝔰𝔯𝔦𝔢𝔫𝔡𝔰 𝔞𝔫𝔡 𝔣𝔞𝔪𝔦𝔩𝔶 𝔱𝔥𝔯𝔬𝔲𝔤𝔥 𝔬𝔲𝔯 𝔰𝔢𝔠𝔲𝔯𝔢 𝔳𝔦𝔡𝔢𝔬
          𝔠𝔞𝔩𝔩𝔰 𝔞𝔫𝔭 𝔰𝔥𝔞𝔯𝔢 𝔶𝔬𝔲𝔯 𝔰𝔠𝔯𝔢𝔢𝔫 𝔱𝔬 𝔢𝔫𝔧𝔬𝔶 𝔰𝔭𝔢𝔠𝔦𝔞𝔩 𝔪𝔬𝔪𝔢𝔫𝔱𝔰 𝔱𝔬𝔤𝔢𝔱𝔥𝔢𝔯.
        </Text>
      </Center>
      <h1
        className={`${theme} intro`}
        style={{ fontFamily: "'UnifrakturCook', cursive" }}
      >
        𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬
      </h1>
      <Center>
        <Text
          className={`${theme} text`}
          style={{ fontFamily: "'UnifrakturCook', cursive" }}
        >
          𝔬𝔲𝔯 𝔭𝔩𝔞𝔱𝔣𝔬𝔯𝔪 𝔦𝔰 𝔩𝔬𝔞𝔡𝔢𝔡 𝔴𝔦𝔱𝔥 𝔣𝔢𝔞𝔱𝔲𝔯𝔢𝔰 𝔱𝔬 𝔢𝔫𝔥𝔞𝔫𝔠𝔢 𝔶𝔬𝔲𝔯 𝔢x𝔭𝔢𝔯𝔦𝔢𝔫𝔠𝔢. 𝔣𝔯𝔬𝔪
          𝔱𝔥𝔢 𝔥𝔬𝔪𝔢 𝔭𝔞𝔤𝔢, 𝔶𝔬𝔲 𝔠𝔞𝔫 𝔢𝔵𝔭𝔩𝔬𝔯𝔢 𝔳𝔞𝔯𝔦𝔬𝔲𝔰 𝔰𝔢𝔠𝔱𝔦𝔬𝔫𝔰, 𝔰𝔱𝔯𝔢𝔞𝔪 𝔳𝔦𝔡𝔢𝔬𝔰 𝔬𝔫𝔩𝕚𝔫𝔢,
          𝔞𝔫𝔡 𝔩𝔢𝔞𝔵𝔢 𝔠𝔬𝔶𝔪𝔢𝔫𝔱𝔰 𝔱𝔬 𝔰𝔥𝔞𝔯𝔢 𝔶𝔬𝔲𝔯 𝔱𝔥𝔬𝔲𝔤𝔥𝔱𝔰 𝔴𝔦𝔱𝔥 𝔬𝔱𝔥𝔢𝔯𝔰. 𝔳𝔦𝔡𝔢𝔬 𝔠𝔞𝔩𝔩𝔰 𝔞𝔯𝔢
          𝔞𝔩𝔰𝔬 𝔢𝔞𝔰𝔦𝔩𝔶 𝔞𝑐𝔠𝔢𝔰𝔰𝔦𝔟𝔩𝔢, 𝔞𝔩𝔩𝓸𝔴𝔦𝔫𝔤 𝔶𝔬𝔲 𝔱𝔬 𝔰𝔱𝔞𝔶 𝔠𝔬𝔫𝔫𝔢𝔠𝔱𝔢𝔡 ᴀɴᴅ 𝔰𝔥𝔞𝔯𝔢 𝔩𝓲𝓿𝓮
          𝔢x𝔭𝔢𝔯𝔦𝔢𝔫𝔠𝔢𝔰 𝔞𝔫𝔶𝓉𝓎𝓂𝑒.
        </Text>
      </Center>
      <h1
        className={`${theme} intro`}
        style={{ fontFamily: "'UnifrakturCook', cursive" }}
      >
        𝐂𝐨𝐧𝐭𝐚𝐜𝐭
      </h1>
      <Center>
        <Text
          className={`${theme} text`}
          style={{ fontFamily: "'UnifrakturCook', cursive" }}
        >
          𝔣𝔬𝔯 𝔰𝔲𝔭𝔭𝔬𝔯𝔱 𝔬𝔯 𝔰𝔦𝔫𝔭𝔩𝔢 𝔲𝔰𝔢𝔯 𝔯𝔢𝔠𝔲𝔢𝔰𝔱𝔰, 𝔭𝔩𝔢𝔞𝔰𝔢 𝔤𝔬 𝔱𝔬 𝔬𝔲𝔯 𝔠𝔵𝔡𝔢𝔣𝔶𝔩𝔡𝔞𝔢 𝔸𝔀 𝔬𝔯
          𝔠𝔬𝔫𝔱𝔞𝔠𝔱 𝔲𝔵 𝔠𝔯𝔰𝔯𝔡𝔞𝔞𝔯𝔡𝔲 𝔤𝔬𝔱 𝔷𝔦𝔯 𝔠𝔯𝔞𝔯 𝔠𝔯𝔡𝔠 𝔭𝔬𝔠𝔫𝔫 𝔠𝔠𝔠 𝔠𝔨 𝔠𝔬𝔯𝔯𝔢𝔰𝔭𝔬𝔫𝔡 𝔬𝔯
          𝔣𝔬𝔦𝔫𝔠𝔶𝔯 𝔬𝔯 𝔤𝔬𝔠 𝔠𝔬𝔯𝔬𝔯𝔠𝔞𝔠𝔢.
        </Text>
      </Center>
    </div>
  );
}

export default About;
