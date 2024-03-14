import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function SpinnerReact() {
  const [loading, setloading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  //   const override = {
  //     display: "block",
  //     margin: "0 auto",
  //     borderColor: "red",
  //   };

  const override = {
    display: "block",
    margin: "0 auto",
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <button onClick={() => setloading(!loading)}>ToggleLoader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}
    </div>
  );
}

export default SpinnerReact;
