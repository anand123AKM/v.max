import React, { useState } from "react";
import VideoRoom from "./VideoRoom";
function VideoCall() {
  const [roomCode, setRoomCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
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
            <h4>Meet Your Friends & Family and enjoy your day here</h4>
          </div>
          <div className="form-divv">
            <form className="room-form" onSubmit={handleFormSubmit}>
              <label className="room">Enter Room Code </label>
              <input
                className="room-code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                required
                placeholder="Enter or Create Room Code"
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
