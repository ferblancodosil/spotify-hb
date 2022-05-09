import { useState } from "react";
import "./App.css";
import "./components/SearchBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <SearchBar handler={(string) => setResult(string)} />
      <div>{result}</div>
    </div>
  );
}

export default App;
