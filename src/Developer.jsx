"use client";

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AKM from "./image/AKM.jpg";

export default function Developer() {
  return (
    <Center className="devlop2" py={6}>
      <Stack
        borderWidth="1px"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("blackish", "gray.900")}
        boxShadow={"2xl"}
        padding={0}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={AKM} alt="#" />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
          className="databg"
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Anand Kr. Maurya
          </Heading>
          <Text className="databg1" fontWeight={600} size="sm" mb={1}>
            @Anand123AKM
          </Text>
          <Text textAlign={"center"} className="databg" px={3}>
            A Frontend & Backend Developer
            <Text className="databg3">#tag</Text>
            me in your posts
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={0}>
            <Badge
              px={2}
              py={1}
              fontWeight={"bolder"}
              bg={useColorModeValue("")}
              className="databg4"
            >
              #React
            </Badge>
            <Badge
              className="databg4"
              px={2}
              py={1}
              bg={useColorModeValue("")}
              fontWeight={"bolder"}
            >
              #JavaScript
            </Badge>
            <Badge
              px={2}
              py={1}
              className="databg4"
              bg={useColorModeValue("")}
              fontWeight={"bolder"}
            >
              #Next.js
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            direction={"row"}
            mt={"-1"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              <a
                href="https://www.linkedin.com/in/anand-kr-maurya-akm16"
                style={{ width: "100%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message
              </a>
            </Button>

            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              <a
                href="https://www.linkedin.com/in/anand-kr-maurya-akm16"
                style={{ width: "100%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow
              </a>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
