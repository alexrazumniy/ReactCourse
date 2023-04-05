import React, { useRef, useState, useEffect } from "react";
import "../../App.css";
import Video from "../video/butterfly.mp4";

export default function Videoplayer() {
  const videoRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playButton = () => {
    const video = videoRef.current;
    video.play();
    setIsPlaying(true);
  };

  const pauseButton = () => {
    const video = videoRef.current;
    video.pause();
    setIsPlaying(false);
  };

  const updateTime = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("timeupdate", updateTime);
    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const timerItem = () => {
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="videoplayer">
      <h3>Task 3.2 Videoplayer</h3>
      <div>
        <video className="video" ref={videoRef} controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="video-btns">
        <button className="button" onClick={playButton}>Play</button>
        <button className="button" onClick={pauseButton}>Pause</button>
      </div>
      <p className="timer">{timerItem()}</p>
    </div>
  );
}
