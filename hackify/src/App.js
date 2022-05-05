import { useState } from "react";
import "./App.css";
import Lyrics from "./components/Lyrics";
// como sanitizar html en react
function App() {
  const [letter] = useState(
    "<br>hola que tal estas <br/> te pregunto a tiiiiiiii"
  );
  return (
    <div className="App">
      <Lyrics letter={letter} />
    </div>
  );
}

export default App;
