import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function VideoRoom({ roomCode }) {
  const myMeeting = async (element) => {
    const appID = Number(import.meta.env.VITE_APP_ID);
    const serverSecret = import.meta.env.VITE_VIDEO_CALL_API_KEY;
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
