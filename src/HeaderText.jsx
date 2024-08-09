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
        <Text
          className="text"
          style={{ fontFamily: "'UnifrakturCook', cursive" }}
        >
          𝔄 𝔰𝔦𝔪𝔭𝔩𝔢 <span className="s">𝔳𝔦𝔡𝔢𝔬 𝔠𝔞𝔩𝔩𝔦𝔫𝔤 & 𝔳𝔦𝔡𝔢𝔬 𝔭𝔩𝔞𝔶𝔢𝔯</span>{" "}
          𝔴𝔢𝔟𝔰𝔦𝔱𝔢 𝔴𝔥𝔢𝔯𝔢 𝔶𝔬𝔲 𝔠𝔞𝔫 𝔠𝔬𝔫𝔫𝔢𝔠𝔱 𝔱𝔬 𝔶𝔬𝔲𝔯
          <span className="v"> 𝔣𝔯𝔦𝔢𝔫𝔡𝔰 </span>𝔞𝔫𝔡
          <span className="v"> 𝔣𝔞𝔪𝔦𝔩𝔶</span> 𝔞𝔫𝔡 𝔢𝔵𝔭𝔢𝔯𝔦𝔢𝔫𝔠𝔢 𝔠𝔯𝔶𝔰𝔱𝔞𝔩-𝔠𝔩𝔢𝔞𝔯 𝔳𝔦𝔡𝔢𝔬
          𝔠𝔞𝔩𝔩𝔰 𝔱𝔥𝔞𝔱 <span className="v">𝔟𝔯𝔦𝔫𝔤 𝔶𝔬𝔲 𝔠𝔩𝔬𝔰𝔢𝔯.</span>
        </Text>
      </Center>
      <Center>
        <Slideshow />
      </Center>
    </>
  );
}

export default HeaderText;
