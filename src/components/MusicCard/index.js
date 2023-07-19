import "./style.css";

function MusicCard({ music }) {
  return (
    <a>
      <img className="music-cover" src={music.cover} alt="" />
      <span className="music-title">{music.title} </span>
      <p className="music-description">{music.description}</p>
    </a>
  );
}

export default MusicCard;
