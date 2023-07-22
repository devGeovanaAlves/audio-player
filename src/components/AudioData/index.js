import "./style.css";

function AudioData({ currentMusic, audioRef }) {
  const handleMetadataLoaded = () => {};

  return (
    <div className="data-music-container">
      <audio
        src={currentMusic.url}
        ref={audioRef}
        handleMetadataLoaded={handleMetadataLoaded}
      ></audio>
      <h1 className="music-name">{currentMusic.title}</h1>
      <span className="author-name">{currentMusic.artist}</span>
    </div>
  );
}

export default AudioData;
