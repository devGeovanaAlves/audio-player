import "./style.css";
import { useEffect } from "react";

function ProgressBar({ progressBarRef, audioRef, duration, progressTime }) {
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = progressTime;
      progressBarRef.current.value = progressTime;
    }
  }, [progressTime]);

  const onProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const convertToString = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="progress-bar-container">
      <span className="time current">{convertToString(progressTime)}</span>
      <input
        className="slider"
        type="range"
        min="0"
        max={duration}
        ref={progressBarRef}
        defaultValue={progressTime}
        onChange={onProgressChange}
      />
      <span className="time">{convertToString(duration)} </span>
    </div>
  );
}

export default ProgressBar;
