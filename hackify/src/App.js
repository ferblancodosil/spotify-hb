import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <SearchBar handler={({ text }) => setResult(text)} />
      <div>{result}</div>
    </div>
  );
}

export default App;
