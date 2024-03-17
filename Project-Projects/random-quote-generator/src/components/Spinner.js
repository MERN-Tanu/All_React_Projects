import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("black");

  const override = {
    display: "block",
    width: "100px",
    height: "100px",
    margin: "0 auto",
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
    </div>
  );
}
export default Spinner;
