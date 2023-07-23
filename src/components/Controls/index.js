import "./style.css";
import { useState, useEffect } from "react";
import nextIcon from "../../assets/next.svg";
import pauseIcon from "../../assets/pause.svg";
import playIcon from "../../assets/play.svg";
import previousIcon from "../../assets/previous.svg";
import stopIcon from "../../assets/stop.svg";

function Controls({
  audioRef,
  musics,
  musicIndex,
  setMusicIndex,
  setCurrentMusic,
}) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const goToNext = () => {
    const nextIndex = musicIndex >= musics.length - 1 ? 0 : musicIndex + 1;
    setMusicIndex(nextIndex);
    setCurrentMusic(musics[nextIndex]);
    togglePlayPause();
  };

  const backToPrevious = () => {
    const prevIndex = musicIndex === 0 ? musics.length - 1 : musicIndex - 1;
    setMusicIndex(prevIndex);
    setCurrentMusic(musics[prevIndex]);
    togglePlayPause();
  };

  const togglePlayPause = () => {
    setIsMusicPlaying((statePrev) => !statePrev);
  };

  const toggleStop = () => {
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying, audioRef]);

  return (
    <div className="buttons-container">
      <button className="normal-button" onClick={toggleStop}>
        <img className="normal-button" src={stopIcon} alt="Botão de stop" />
      </button>

      <button className="normal-button" onClick={backToPrevious}>
        <img
          className="normal-button"
          src={previousIcon}
          alt="Botão de voltar"
        />
      </button>

      <button id="play-pause" onClick={togglePlayPause}>
        {isMusicPlaying ? (
          <img className="play-pause" src={pauseIcon} alt="Botão de pause" />
        ) : (
          <img className="play-pause" src={playIcon} alt="Botão de play" />
        )}
      </button>

      <button className="normal-button" onClick={goToNext}>
        <img className="normal-button" src={nextIcon} alt="Botão de próximo" />
      </button>
    </div>
  );
}

export default Controls;
