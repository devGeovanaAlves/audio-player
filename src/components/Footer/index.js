import "./style.css";
import { useState, useRef } from "react";
import { musics } from "../../musics"; //id, title, artist, description, url, cover
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";

function Footer() {
  const [currentMusic, setCurrentMusic] = useState(musics[0]);
  const audioRef = useRef();

  return (
    <footer>
      <div className="data-music-container">
        <audio src={currentMusic.url} ref={audioRef}></audio>
        <h1 className="music-name">{currentMusic.title}</h1>
        <span className="author-name">{currentMusic.artist}</span>
      </div>
      <div className="controls-container">
        <Controls audioRef={audioRef} />
        <ProgressBar />
      </div>
    </footer>
  );
}

export default Footer; //AudioPlayer
