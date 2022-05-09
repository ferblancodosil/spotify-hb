// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import InfoSongComponent from "./component/infoSongComponent";

function App() {
  const [songs, setSongs] = useState([
    {
      author: "Perales",
      songName: "Un velero llamado libertad",
      cdPic: "no tiene foto",
      length: "4:17",
      discTitle: "Grandes Exitos de Perales",
    },
  ])


  return (
    <div className="App">
      {songs.map((song, index) => (
        // InfoSongComponent(song)
        <InfoSongComponent
          author={song.author}
          songName={song.songName}
          cdPic={song.cdPic}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
