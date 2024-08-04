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
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const handleClick = () => {
    if (input1.length > 0 && input2.length > 0 && input3.length > 0) {
      setShowAlert(true);
      setInput1("");
      setInput2("");
      setInput3("");
    } else {
      alert("Please fill all the fields");
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const onsubmit = (e) => {
    if (!input3.endsWith("@gmail.com")) {
      alert("Please enter a valid Gmail address");
    } else {
      handleClick();
    }
    console.log("Form submitted", { input1, input3 });
  };

  return (
    <>
      <Center className="contactfull">
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
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              size="lg"
            />
          </FormControl>
          <FormControl className="inp" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              className={`${theme} inp2`}
              type="email"
              placeholder="original email"
              size="lg"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel className="inp">Message</FormLabel>
            <input
              className={`${theme} inp1`}
              type="text"
              placeholder="Message"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
          </FormControl>
          {showAlert && (
            <Alert
              zIndex={1}
              borderRadius={5}
              marginTop={5}
              status="success"
              variant="subtle"
              color={"red"}
              background={"none"}
              fontWeight={"bold"}
            >
              <AlertIcon color={"red"} />
              Message Send!
            </Alert>
          )}
          <div className={`${theme} send1`}>
            <Button
              className={`${theme} send2`}
              variant="outline"
              width="100px"
              mt={8}
              onClick={() => {
                onsubmit();
              }}
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
