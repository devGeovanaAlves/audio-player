import "./style.css";

function AudioData({ currentMusic, audioRef, setDuration, progressBarRef }) {
  const onLoadedMetadata = () => {
    const timeSeconds = audioRef.current.duration;
    setDuration(timeSeconds);
    progressBarRef.current.max = timeSeconds;
  };

  return (
    <div className="data-music-container">
      <audio
        src={currentMusic.url}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <h1 className="music-name">{currentMusic.title}</h1>
      <span className="author-name">{currentMusic.artist}</span>
    </div>
  );
}

export default AudioData;
