import "./style.css";

function ProgressBar({ progressBarRef, audioRef, duration, progressTime }) {
  const onProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="progress-bar-container">
      <span className="time current">{progressTime}</span>
      <input
        className="slider"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={onProgressChange}
      />
      <span className="time">{duration} </span>
    </div>
  );
}

export default ProgressBar;
