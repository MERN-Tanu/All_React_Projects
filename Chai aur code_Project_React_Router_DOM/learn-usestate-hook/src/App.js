import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // this 0 value will assign for count

  // let count = 1;
  const IncreCount = () => {
    setCount(count + 1); // here, setCount will update the value of count 0+1=1
    // console.log("clicked me", count++);
  };
  const DecreCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="main-page">
      <button onClick={DecreCount}>-</button>
      <h1> {count} </h1>

      <button className="button-incre" onClick={IncreCount}>
        +
      </button>
    </div>
  );
}

export default App;
