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
    {
      author: "P",
      songName: "U",
      cdPic: "to",
      length: "4:17",
      discTitle: "Grandes Exitos de Perales",
    },
    {
      author: "Perales",
      songName: "Un velero llamado libertad",
      cdPic: "no",
      length: "4:17",
      discTitle: "Grandes Exitos de Perales",
    },
  ]);

  return (
    <div className="App">
      {songs.map((song, index) => (
        <div key={index}>{InfoSongComponent(song)}</div>
      ))}
    </div>
  );
}

export default App;
