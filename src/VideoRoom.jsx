import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function VideoRoom({ roomCode }) {
  const myMeeting = async (element) => {
    const appID = 1536569376;
    const serverSecret = "dc12ba4647430d920fc9b18d842f6142";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomCode,
      Date.now().toString(),
      "Your Name"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div className="room-page">
      <div className="rmv" ref={myMeeting} />
    </div>
  );
}

export default VideoRoom;
