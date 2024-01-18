import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom/dist";

const Github = () => {
    const [data, setData] = useState("")
  useEffect(() => {
    fetch("https://github.com/MERN-Tanu"
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setData(data)
    
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">

      Github followers:{" "}
    </div>
  );
};

export default Github;
