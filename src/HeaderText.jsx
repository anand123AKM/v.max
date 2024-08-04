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
          𝔄 𝔰𝔦𝔪𝔭𝔩𝔢 <span className="s">𝔳𝔦𝔡𝔢𝔬 𝔭𝔩𝔞𝔶𝔢𝔯</span> 𝔴𝔢𝔟𝔰𝔦𝔱𝔢 𝔴𝔥𝔢𝔯𝔢
          𝔢𝔳𝔢𝔯𝔶𝔬𝔫𝔢 𝔠𝔞𝔫 𝔰𝔢𝔢 𝔡𝔦𝔣𝔣𝔢𝔯𝔢𝔫𝔱 <span className="v">𝔳𝔦𝔡𝔢𝔬𝔰</span> . 𝔜𝔬𝔲 𝔠𝔞𝔫
          𝔞𝔩𝔰𝔬 𝔪𝔞𝔨𝔢 𝔞 𝔳𝔦𝔡𝔢𝔬 𝔠𝔞𝔩𝔩 𝔴𝔦𝔱𝔥 𝔶𝔬𝔲𝔯 <span className="v">𝔣𝔯𝔦𝔢𝔫𝔡𝔰 </span>
          𝔞𝔫𝔡
          <span className="v"> 𝔣𝔞𝔪𝔦𝔩𝔶</span>.
        </Text>
      </Center>
      <Center>
        <Slideshow />
      </Center>
    </>
  );
}

export default HeaderText;
