import "./style.css";
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";

function Footer({ authorName, musicName }) {
  return (
    <footer>
      <div className="data-music-container">
        <h1 className="music-name">Lorem ipsum{musicName}</h1>
        <span className="author-name">Dolor sit{authorName}</span>
      </div>
      <div className="controls-container">
        <Controls />
        <ProgressBar />
      </div>
    </footer>
  );
}

export default Footer;
