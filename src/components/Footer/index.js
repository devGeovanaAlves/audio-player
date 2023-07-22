import "./style.css";
import { useState, useRef } from "react";
import { musics } from "../../musics"; //id, title, artist, description, url, cover
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";
import AudioData from "../AudioData";

function Footer() {
  const [currentMusic, setCurrentMusic] = useState(musics[0]);
  const audioRef = useRef();

  return (
    <footer>
      <AudioData currentMusic={currentMusic} audioRef={audioRef} />

      <div className="controls-container">
        <Controls audioRef={audioRef} />
        <ProgressBar />
      </div>
    </footer>
  );
}

export default Footer; //AudioPlayer
