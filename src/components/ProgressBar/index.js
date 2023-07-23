import "./style.css";

function ProgressBar({ progressBarRef, audioRef, duration, progressTime }) {
  const onProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const convertToString = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time - minutes * 60);

      const timeString =
        minutes.toString().padStart(2, "0") +
        "." +
        seconds.toString().padStart(2, 0);

      return timeString;
    }

    return "--.--";
  };

  return (
    <div className="progress-bar-container">
      <span className="time current">{convertToString(progressTime)}</span>
      <input
        className="slider"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={onProgressChange}
      />
      <span className="time">{convertToString(duration)} </span>
    </div>
  );
}

export default ProgressBar;
