import "./style.css";
import nextIcon from "../../assets/next.svg";
import pauseIcon from "../../assets/pause.svg";
import playIcon from "../../assets/play.svg";
import previousIcon from "../../assets/previous.svg";
import stopIcon from "../../assets/stop.svg";

function Footer({ authorName, musicName }) {
  return (
    <footer>
      <div className="author-container">
        <h1 className="music-name">Lorem ipsum{musicName}</h1>
        <span className="author-name">Dolor sit{authorName}</span>
      </div>
      <div className="controls-container">
        <img src={stopIcon} alt="Botão de stop" />
        <img src={previousIcon} alt="Botão de voltar" />
        <img className="play-pause" src={playIcon} alt="Botão de play" />
        <img className="play-pause" src={pauseIcon} alt="Botão de pause" />
        <img src={nextIcon} alt="Botão de próximo" />
      </div>
    </footer>
  );
}

export default Footer;
