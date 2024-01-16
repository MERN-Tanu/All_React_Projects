import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  console.log("c", color);
  return (
    <div
      className={`w-full h-screen duration-200 bg-${color}`}
      // style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
            onClick={() => setColor("red-600")}>
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600"
            onClick={() => setColor("green-600")}>
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600"
            onClick={() => setColor("pink-600")}>
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
            onClick={() => setColor("blue-600")}>
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600"
            onClick={() => setColor("yellow-600")}>
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600"
            onClick={() => setColor("purple-600")}>
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-600"
            onClick={() => setColor("gray-600")}>
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-600"
            onClick={() => setColor("orange-600")}>
            orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-olive"
            onClick={() => setColor("olive")}>
            Teal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
