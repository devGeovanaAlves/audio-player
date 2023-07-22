import "./style.css";
import { useState } from "react";
import { musics } from "../../musics"; //id, title, artist, description, url, cover
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";

function Footer() {
  const [currentMusic, setCurrentMusic] = useState(musics[0]);

  return (
    <footer>
      <div className="data-music-container">
        <audio src={currentMusic.url}></audio>
        <h1 className="music-name">{currentMusic.title}</h1>
        <span className="author-name">{currentMusic.artist}</span>
      </div>
      <div className="controls-container">
        <Controls />
        <ProgressBar />
      </div>
    </footer>
  );
}

export default Footer; //AudioPlayer
