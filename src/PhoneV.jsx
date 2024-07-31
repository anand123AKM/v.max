import React, { useState, useEffect, useRef } from "react";
import { AspectRatio, Box } from "@chakra-ui/react";
import "./App.css";
import { PointsContext } from "./PointsContext";
import { useContext } from "react";
import video from "./first-video.mp4";
import api from "./videoAPI";
import { NameContextE } from "./NameContextE";
import { AvatarGroup, MenuButton, Avatar, Menu } from "@chakra-ui/react";
import { NameContext } from "./NameContext";

function PhoneV({ theme }) {
  const name = useContext(NameContext);
  const { nameValue } = useContext(NameContextE);
  const { handlePointsChange } = useContext(PointsContext);
  const [selectedVideo, setSelectedVideo] = useState(video);
  const [videoQuality, setVideoQuality] = useState("320p");
  const [showQualitySelector, setShowQualitySelector] = useState(true);
  const [showQualityOptions, setShowQualityOptions] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [locationData, setLocation] = useState({
    location: "",
    temperature: "",
  });
  const apiKey = "fd9b980c7bb1e4097ad73994867af5d1";

  const getweather = async () => {
    try {
      const res = await axios.get(
        `  https://api.openweathermap.org/data/2.5/weather?q=$Lucknow&appid=${apiKey}`
      );
      setLocation(`${res.data.name} ${res.data.sys.country}`);
      setTemperature(res.data.main.temp);
      setShowPopup(true);
    } catch (err) {
      console.log(err);
    }
  };

  const videoRef = useRef(null);
  const lastTapRef = useRef(0);

  const handleVideoEnd = () => {
    handlePointsChange(5);
  };

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedVideo(fileUrl);
    }
  };

  const handleQualityChange = (e) => {
    setVideoQuality(e.target.value);
  };
  const handleScreenClick = (videoSource) => {
    setSelectedVideo(videoSource);
  };

  const handleScreenTap = (event) => {
    setShowQualitySelector(!showQualitySelector);
    event.preventDefault();

    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapRef.current;
    lastTapRef.current = currentTime;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const { left, width } = videoElement.getBoundingClientRect();
    const tapPosition = event.clientX - left;

    if (tapLength >= 500) {
      const centerThreshold = width / 3;
      if (
        tapPosition > centerThreshold &&
        tapPosition < width - centerThreshold
      ) {
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    } else if (tapLength < 500 && tapLength > 0) {
      if (tapPosition < width / 2) {
        videoElement.currentTime = Math.max(0, videoElement.currentTime - 10);
      } else {
        videoElement.currentTime = Math.min(
          videoElement.duration,
          videoElement.currentTime + 10
        );
      }
    }

    const videoElements = videoRef.current;
    if (!videoElements) return;

    const { right, widths } = videoElements.getBoundingClientRect();
    const tapPositions = event.clientX;
    if (tapPositions > right - widths * 0.1) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getweather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  };

  const handlePressStart = (event) => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const { left, width } = videoElement.getBoundingClientRect();
    const tapPosition = event.clientX - left;

    if (tapPosition < width / 2) {
      videoElement.playbackRate = 0.5;
    } else {
      videoElement.playbackRate = 2.0;
    }
  };

  const handlePressEnd = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = 1.0;
    }
  };

  const handleDotsClick = (e) => {
    e.stopPropagation();
    setShowQualityOptions(!showQualityOptions);
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentChange = (event) => {
    setCurrentComment(event.target.value);
  };

  const handleComments = (event) => {
    if (event.key === "Enter" && currentComment.trim() !== "") {
      const newComments = [
        ...comments,
        { text: currentComment, timestamp: new Date().toISOString() },
      ];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setCurrentComment("");
    }
  };

  const CurrentUser = {
    result: {
      Name: name || nameValue,
      joinedOn: "2021-09-01T00:00:00.000Z",
    },
  };

  return (
    <>
      <div className="lv">
        <div className="divw">
          {/* <input
            className={`${theme} select-video`}
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          /> */}
          {selectedVideo && (
            <AspectRatio
              maxW="625px"
              marginTop={"18px"}
              ratio={2 / 1}
              position="relative"
              className="aspect-ratio"
            >
              <div>
                <video
                  onMouseDown={handlePressStart}
                  onTouchStart={handlePressStart}
                  onMouseUp={handlePressEnd}
                  onTouchEnd={handlePressEnd}
                  onClick={handleScreenTap}
                  src={selectedVideo}
                  controls
                  ref={videoRef}
                  onEnded={handleVideoEnd}
                  onError={(e) => console.error("Video error: ", e)}
                  style={{ width: "100%" }}
                />
                {showQualitySelector && (
                  <Box
                    className="video-q"
                    position="absolute"
                    top="7px"
                    right="6px"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="threedot" onClick={handleDotsClick}>
                      ...
                    </div>
                    {showQualityOptions && (
                      <select
                        value={videoQuality}
                        onChange={handleQualityChange}
                      >
                        <option value="144p">144p</option>
                        <option value="320p">320p</option>
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                      </select>
                    )}
                  </Box>
                )}
              </div>
            </AspectRatio>
          )}
          <div className="comment">
            <h1>Comments</h1>
            <input
              type="text"
              className="input-comment"
              value={currentComment}
              onChange={handleCommentChange}
              onKeyDown={handleComments}
            />
          </div>
          <div className="comboxover">
            <div className="comments-list">
              {comments.map((comment, index) => (
                <div className="comboxover">
                  <div className="com-box" key={index}>
                    <Menu>
                      <MenuButton>
                        <AvatarGroup ml={-2} mr={2}>
                          <div className={`channel-logo ${theme}`}>
                            {CurrentUser ? (
                              <div className={`channel-logo ${theme}`}>
                                <>
                                  {CurrentUser?.result.Name.charAt(
                                    0
                                  ).toUpperCase()}
                                </>
                              </div>
                            ) : (
                              <>
                                <Avatar bg="teal.500" />
                              </>
                            )}
                          </div>
                        </AvatarGroup>
                      </MenuButton>
                    </Menu>
                    <div className="com-text"> {comment.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="video-containerAll divw2">
          {api.map((match) => (
            <div className={`${theme} video-container`}>
              <video
                onClick={handleScreenClick.bind(this, match.video)}
                onEnded={handleVideoEnd}
                src={match.video}
              ></video>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup-box">
          <p>Location: {locationData.location}</p>
          <p>Temperature: {locationData.temperature}</p>
        </div>
      )}
    </>
  );
}

export default PhoneV;
