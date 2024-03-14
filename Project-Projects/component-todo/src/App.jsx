// import { useState } from "react";
// import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
// import { ToDo } from "./components/ToDo";

// function App() {
//   const [count, setCount] = useState(1);

//   function increHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={increHandler}>Add</button>
//     </div>
//   );
// }

// export default App;

//  Text field (string)

// function App() {
//   const [text, setText] = useState("tanu");

//   function textHandler(e) {
//     setText(e.target.value);
//   }

//   return (
//     <div>
//       <input value={text} onChange={textHandler} />
//       <p>You Pressed : {text}</p>
//       <button onClick={() => setText("tanu")}>Reset</button>
//     </div>
//   );
// }

// export default App;

// Updating the Previous state (passing updater function) :

// function App() {
//   const [age, setAge] = useState(40);

//   function ageHanler() {
//     setAge((age) => age + 1);
//   }

//   return (
//     <div>
//       <h2>Age is : {age}</h2>
//       <button
//         onClick={() => {
//           ageHanler();
//           ageHanler();
//           ageHanler();
//         }}>
//         +3
//       </button>

//       <button onClick={() => ageHanler()}>+1</button>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <ToDoList />
    </div>
  );
}

export default App;
