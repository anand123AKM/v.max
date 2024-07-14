import React from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";

function Contact({ theme }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <>
      <Center>
        <form className={`${theme} form`}>
          <Center>
            <h1
              variant="outline"
              width="100px"
              mt={8}
              className={`${theme} contact`}
            >
              Contact Us
            </h1>
          </Center>
          <FormControl isRequired>
            <FormLabel className="inp">Name</FormLabel>
            <Input
              className={`${theme} inp2`}
              type="text"
              placeholder="Name"
              size="lg"
            />
          </FormControl>
          <FormControl className="inp" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              className={`${theme} inp2`}
              type="email"
              placeholder="test@test.com"
              size="lg"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel className="inp">Message</FormLabel>
            <input
              className={`${theme} inp1`}
              type="text"
              placeholder="Message"
            />
          </FormControl>
          {showAlert && (
            <Alert
              zIndex={1}
              borderRadius={5}
              marginTop={5}
              status="success"
              variant="subtle"
            >
              <AlertIcon />
              Message Send!
            </Alert>
          )}
          <div className={`${theme} send1`}>
            <Button
              className={`${theme} send2`}
              variant="outline"
              width="100px"
              mt={8}
              onClick={handleClick}
            >
              SEND
            </Button>
          </div>
        </form>
      </Center>
    </>
  );
}

export default Contact;
