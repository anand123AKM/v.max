import React, { useState } from "react";
import VideoRoom from "./VideoRoom";
import whatsapp from "./wt.png";
function VideoCall() {
  const [roomCode, setRoomCode] = useState("");
  const [roomCode1, setRoomCode1] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [Copy, setCopy] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleCreateRoom = () => {
    if (!roomCode1.trim()) {
      setErrorMessage("Room code is required!!");
      return;
    }
    setErrorMessage("");
    setIsCreated(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendClick = () => {
    const videoLink = "https://v-max.netlify.app";
    const whatsappUrl = `https://wa.me/?text=Video%20Call%20Link%3A%20${encodeURIComponent(
      videoLink
    )}%0AAnd%20Room%20Code%3A%20${encodeURIComponent(roomCode1)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="video-home">
      {isSubmitted ? (
        <div>
          <VideoRoom roomCode={roomCode} />
        </div>
      ) : (
        <>
          <div className="room-heading">
            <h1>V-MAX CAll</h1>
            <h4>Meet Your Friends & Family and enjoy your day </h4>
          </div>
          <center>
            <center className="what123">
              {!isCreated ? (
                <div className="wht1">
                  <label className="room">Create Room</label>
                  <div className="cor2">
                    <input
                      className="room-code cor"
                      value={roomCode1}
                      onChange={(e) => setRoomCode1(e.target.value)}
                      type="text"
                      required
                      placeholder="create room code"
                    />
                    <button
                      className="room-button rew"
                      onClick={handleCreateRoom}
                    >
                      Create
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </div>
              ) : (
                <div className="wht1">
                  <h2 className="room rmc3">Room Code Created</h2>
                  <div className="rmc123">
                    <h1 className="rmc">Your Room Code : {roomCode1} </h1>
                    <button
                      className="rew1234"
                      onClick={() => {
                        navigator.clipboard.writeText(roomCode1);
                        setCopy(true);
                      }}
                    >
                      copy{Copy && <span style={{ color: "white" }}>✔</span>}
                    </button>
                  </div>
                  <div className="wp">
                    <h1 className="share">SHARE</h1>
                    <button className="send-button" onClick={handleSendClick}>
                      <img
                        src={whatsapp}
                        alt="WhatsApp"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </button>
                  </div>
                </div>
              )}
            </center>
          </center>
          <div className="form-divv">
            <form className="room-form" onSubmit={handleFormSubmit}>
              <label className="room">Enter Room Code </label>
              <input
                className="room-code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                required
                placeholder="Enter Room Code"
              />
              <button className="room-button" type="submit">
                Call Now
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default VideoCall;
