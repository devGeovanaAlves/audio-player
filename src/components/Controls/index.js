import "./style.css";
import { useState } from "react";
import nextIcon from "../../assets/next.svg";
import pauseIcon from "../../assets/pause.svg";
import playIcon from "../../assets/play.svg";
import previousIcon from "../../assets/previous.svg";
import stopIcon from "../../assets/stop.svg";

function Controls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="buttons-container">
      <button className="normal-button">
        <img className="normal-button" src={stopIcon} alt="Botão de stop" />
      </button>

      <button className="normal-button">
        <img
          className="normal-button"
          src={previousIcon}
          alt="Botão de voltar"
        />
      </button>

      <button className="play-pause">
        {isPlaying ? (
          <img className="play-pause" src={pauseIcon} alt="Botão de pause" />
        ) : (
          <img className="play-pause" src={playIcon} alt="Botão de play" />
        )}
      </button>

      <button className="normal-button">
        <img className="normal-button" src={nextIcon} alt="Botão de próximo" />
      </button>
    </div>
  );
}

export default Controls;
