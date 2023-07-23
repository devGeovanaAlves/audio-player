import "./style.css";
import { useState, useRef } from "react";
import { musics } from "../../musics"; //id, title, artist, description, url, cover
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";
import AudioData from "../AudioData";

function Footer() {
  const [musicIndex, setMusicIndex] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(musics[musicIndex]);
  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);
  const [progressTime, setProgressTime] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <footer>
      <AudioData
        currentMusic={currentMusic}
        audioRef={audioRef}
        setDuration={setDuration}
        progressBarRef={progressBarRef}
        setCurrentTime={setCurrentTime}
      />

      <div className="controls-container">
        <Controls
          audioRef={audioRef}
          musics={musics}
          musicIndex={musicIndex}
          setMusicIndex={setMusicIndex}
          setCurrentMusic={setCurrentMusic}
        />
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          duration={duration}
          progressTime={currentTime}
        />
      </div>
    </footer>
  );
}

export default Footer; //AudioPlayer
