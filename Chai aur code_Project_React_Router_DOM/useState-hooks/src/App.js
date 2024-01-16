import { useState } from "react";

function App() {
  // let counter = 5;
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", Math.random());
    if (counter < 20) {
      setCounter(counter + 1);
    }
    // counter = counter + 1;
  };

  const removeValue = () => {
    console.log("clickedRemove", Math.random());
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Learn Hooks</h1>
      <h2>Counter-value :{counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  );
}

export default App;
