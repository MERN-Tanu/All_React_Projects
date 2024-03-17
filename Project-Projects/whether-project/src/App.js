import { useEffect, useState } from "react";
import "./App.css";
import { TbBrightnessUp } from "react-icons/tb";
import { BsBrightnessHighFill } from "react-icons/bs";
import WhetherTask from "./components/WhetherTask";
// import SpinnerReact from "./components/SpinnerReact";
import Shimmer from "./components/Shimmer";
import SpinnerReact from "./components/SpinnerReact";

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);

      // clean up the timeout
      return () => clearTimeout(timeout);
    }, 1000);
  }, []);

  function toggleButton() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <div
        className={
          theme === "light"
            ? "bg-black min-h-[100vh] overflow-hidden"
            : "bg-white"
        }>
        <div className={theme === "light" ? "text-white" : "text-black"}>
          <div className="flex justify-between">
            <div></div>
            <div>
              <h1 className="font-serif font-extrabold text-5xl mt-4">
                Weather App
              </h1>
            </div>
            <div>
              <button onClick={toggleButton} className="mr-8 mt-7">
                {theme === "light" ? (
                  <BsBrightnessHighFill color="white" fontSize={30} />
                ) : (
                  <TbBrightnessUp color="black" fontSize={30} />
                )}
              </button>
            </div>
          </div>
          <div>
            <WhetherTask />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
