import "./style.css";
import MusicCard from "../MusicCard";
import { musics } from "../../musics"; //id, title, artist, description, url, cover

function Main() {
  return (
    <main>
      <h1>The best play list</h1>
      <div className="musics-container">
        {musics.map((music) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </div>
    </main>
  );
}

export default Main;
