"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import AKM from "./image/AKM.jpg";

export default function Developer3() {
  return (
    <Center className="devlop3" py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        overflow={"hidden"}
        borderWidth="1px"
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit="cover"
          alt="#"
        />
        <Flex className="datasm" justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={AKM}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box className="datasm" p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading
              color={"white"}
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
            >
              Anand Kr. Maurya
            </Heading>
            <Text color={"green.100"}>MERN Developer</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text color={"azure"} fontWeight={600}>
                GitHub
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Anand123AKM
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text color={"azure"} fontWeight={600}>
                Linkedin
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Anand123AKM
              </Text>
            </Stack>
          </Stack>
          <a
            href="https://www.linkedin.com/in/anand-kr-maurya-akm16"
            style={{ width: "100%" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Follow
            </Button>
          </a>
        </Box>
      </Box>
    </Center>
  );
}
