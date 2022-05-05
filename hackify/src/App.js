// import logo from "./logo.svg";
import "./App.css";
import InfoSongComponent from "./component/infoSongComponent";

function App() {
  return (
    <div className="App">
      <InfoSongComponent
        author="Perales"
        songName="Un velero llamado libertad"
        cdPic="no tiene foto"
        length="4:17"
        discTitle="Grandes Exitos de Perales"
      />
    </div>
  );
}

export default App;
