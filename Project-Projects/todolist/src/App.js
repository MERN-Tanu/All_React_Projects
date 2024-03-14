import { useState } from "react";
import "./App.css";
import { FaRegMoon } from "react-icons/fa";

import { BsBrightnessHigh } from "react-icons/bs";
import MainContainer from "./components/MainContainer";
// import { darkTheme, lightTheme } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <div
        className={
          theme === "light"
            ? "bg-gray-900 min-h-[100vh] overflow-hidden"
            : "bg-white "
        }>
        <div className={theme === "light" ? "text-white" : "text-black"}>
          <div className="bg-red-300 items-center flex justify-between ">
            <div></div>
            <h1 className="text-center font-serif font-bold text-4xl p-4 ">
              ToDo List
            </h1>
            <div>
              <button onClick={toggleTheme} className="mr-10">
                {theme === "light" ? (
                  <FaRegMoon color="white" fontSize={30} />
                ) : (
                  <BsBrightnessHigh color="black" fontSize={30} />
                )}
              </button>
            </div>
          </div>
          <div className="App bg-amber-200 w-6/12 ml-80 bg-fixed  outline-double pb-12">
            <MainContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
