"use client";

import { Avatar, Box, Center } from "@chakra-ui/react";
import React from "react";
import mysql from "./image/mysql.png";
import api from "./image/api.png";
import chakra from "./image/chakra.png";
import css from "./image/CSS-Logo.png";
import express from "./image/express-js.png";
import firebase from "./image/firebase.webp";
import js from "./image/js1.png";
import react from "./image/React.png";
import node from "./image/node-js.jpg";

function Tech() {
  return (
    <div>
      <Center className="tech">Technology Used</Center>
      <Center py={6}>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"lg"}
          p={6}
        >
          <Avatar margin={5} size={"xl"} src={react} />
          <Avatar margin={5} size={"xl"} src={js} />
          <Avatar margin={5} size={"xl"} src={node} />
          <Avatar margin={5} size={"xl"} src={firebase} />
          <Avatar margin={5} size={"xl"} src={chakra} />
          <Avatar margin={5} size={"xl"} src={api} />
          <Avatar margin={5} size={"xl"} src={mysql} />
          <Avatar margin={5} size={"xl"} src={express} />
          <Avatar margin={5} size={"xl"} src={css} />
        </Box>
      </Center>
    </div>
  );
}

export default Tech;
