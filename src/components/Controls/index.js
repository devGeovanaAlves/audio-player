import "./style.css";
import nextIcon from "../../assets/next.svg";
import pauseIcon from "../../assets/pause.svg";
import playIcon from "../../assets/play.svg";
import previousIcon from "../../assets/previous.svg";
import stopIcon from "../../assets/stop.svg";

function Controls() {
  return (
    <div className="buttons-container">
      <img className="normal-button" src={stopIcon} alt="Botão de stop" />
      <img className="normal-button" src={previousIcon} alt="Botão de voltar" />
      <img className="play-pause" src={playIcon} alt="Botão de play" />
      <img className="play-pause" src={pauseIcon} alt="Botão de pause" />
      <img className="normal-button" src={nextIcon} alt="Botão de próximo" />
    </div>
  );
}

export default Controls;
