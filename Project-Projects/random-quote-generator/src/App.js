import "./App.css";
import RandomQuote from "./components/RandomQuote";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div>
        {" "}
        <RandomQuote />
      </div>
      {/* <Spinner /> */}
    </div>
  );
}

export default App;
