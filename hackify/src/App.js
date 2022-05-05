import logo from "./logo.svg";
import "./App.css";
import "./components/SearchBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar handler={() => console.log("hola")} />
    </div>
  );
}

export default App;
