function MusicCard({ music }) {
  return (
    <a>
      <img className="music-cover" src={music.cover} alt="" />
      <span>{music.title} </span>
      <p>{music.description}</p>
    </a>
  );
}

export default MusicCard;
