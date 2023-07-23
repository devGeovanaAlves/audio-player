import "./style.css";
import { useEffect } from "react";

function AudioData({
  currentMusic,
  audioRef,
  setDuration,
  progressBarRef,
  setCurrentTime,
}) {
  const handleLoadedMetadata = () => {
    const timeSeconds = audioRef.current.duration;
    setDuration(timeSeconds);
    progressBarRef.current.max = timeSeconds;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="data-music-container">
      <audio
        src={currentMusic.url}
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
      <h1 className="music-name">{currentMusic.title}</h1>
      <span className="author-name">{currentMusic.artist}</span>
    </div>
  );
}

export default AudioData;
