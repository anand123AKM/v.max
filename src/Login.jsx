import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, db, collection, doc, setDoc } from "./firebase";
import { NameContextE } from "./NameContextE";
import { EmailContext } from "./NameContext";

export default function Login({ theme }) {
  const { SetemailValue } = useContext(EmailContext);
  const { SetnameValue } = useContext(NameContextE);
  const [otpSent, setOtpSent] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);
  const [location, setLocation] = useState("");
  const southIndianStates = [
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Andhra Pradesh",
    "Telangana",
    "Uttar Pradesh",
  ];

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get("https://ipapi.co/json/");
        setLocation(res.data.region);
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    };

    fetchLocation();
  }, []);

  const [phone, setPhone] = useState("");
  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  const captcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        this.onSignInSubmit();
        console.log("recaptcha verified");
      },
      defaultCountry: "IN",
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    captcha();
    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP sent");
        setOtpSent(true);
      })
      .catch((error) => {
        console.error("SMS not sent", error);
      });
  };

  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [code, setCode] = useState("");
  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };
  const SubmitOTP = () => {
    if (!window.confirmationResult) {
      console.error("Confirmation result is not set");
      return;
    } else {
      console.log("varified user");
    }

    window.confirmationResult
      .confirm(code)
      .then(async (result) => {
        const user = result.user;
        console.log(user);
        const userId = user.uid;
        console.log("User ID:", userId);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        try {
          const usersCollection = collection(db, "users");
          const userDoc = doc(usersCollection, userId);
          await setDoc(userDoc, { name: name });
          console.log("User profile document successfully created!");
        } catch (error) {
          console.error("Error creating user profile document: ", error);
        }
      })
      .catch((error) => {
        console.error("Error confirming OTP", error);
      });
  };

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const requestOtp = async () => {
    const response = await fetch("http://127.0.0.1:3000/request-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const result = await response.text();
    setMessage(result);
  };
  const verifyOtp = async () => {
    const emailValue = email;
    const nameValue = name;
    const otpValue = code;
    const response = await fetch("http://127.0.0.1:3000/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        otp: otpValue,
        name: nameValue,
      }),
    });
    const result = await response.text();
    setMessage(result);
    SetnameValue(nameValue);
    SetemailValue(emailValue);
    if (result === "OTP verified successfully!") {
      setIsLoggedIn(true);
      localStorage.setItem(
        "userData",
        JSON.stringify({ email: emailValue, name: nameValue })
      );
      fetch("http://localhost:3001/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          name: nameValue,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update");
          }
          console.log("updated successfully");
        })
        .catch((error) => {
          console.error("Error updating:", error);
        });
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Center>
        <div className={`${theme} form`}>
          <FormControl isRequired>
            <div id="sign-in-button"></div>
            <Center>
              <h1 variant="outline" mt={8} className={`${theme} contact`}>
                Login
              </h1>
            </Center>
            <FormLabel className="inp">Name</FormLabel>
            <Input
              className={`${theme} inp2`}
              type="text"
              name="name"
              placeholder="Name"
              color={"white"}
              onChange={handleChangeName}
            />
            {southIndianStates.includes(location) ? (
              <>
                <FormLabel className="inp">Phone</FormLabel>
                <InputGroup>
                  <Input
                    className={`${theme} inp2`}
                    type="tel"
                    name="phone"
                    placeholder="phone no."
                    color={"white"}
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={onSignInSubmit}>
                      OTP
                      {otpSent && <span style={{ color: "green" }}>✔</span>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </>
            ) : (
              <>
                <FormLabel className="inp">Phone</FormLabel>
                <InputGroup>
                  <Input
                    className={`${theme} inp2`}
                    type="tel"
                    name="phone"
                    placeholder="phone no."
                    color={"white"}
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={onSignInSubmit}>
                      OTP
                      {otpSent && <span style={{ color: "green" }}>✔</span>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </>
            )}
            <FormLabel className="inp">OTP</FormLabel>
            <Input
              className={`${theme} inp2`}
              type="text"
              id="otp"
              onChange={(e) => {
                setCode(e.target.value);
                handleChangeCode(e);
              }}
              name="otp"
              placeholder="OTP"
              color={"white"}
              value={code}
            />

            <div className={`${theme} send1`}>
              <Button
                id="verify-otp"
                className={`${theme} send2`}
                variant="outline"
                width="100px"
                mt={8}
                color={"white"}
                size="lg"
                onClick={() => {
                  SubmitOTP();
                  verifyOtp();
                }}
              >
                Login
              </Button>
              <p id="message">{message}</p>
            </div>
          </FormControl>
        </div>
      </Center>
    </>
  );
}

//  <FormLabel className="inp">Email</FormLabel>
//                 <InputGroup>
//                   <Input
//                     className={`${theme} inp2`}
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     name="email"
//                     placeholder="Email"
//                     color={"white"}
//                   />
//                   <InputRightElement width="4.5rem">
//                     <Button
//                       id="request-otp"
//                       onClick={requestOtp}
//                       h="1.75rem"
//                       size="sm"
//                     >
//                       OTP
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
