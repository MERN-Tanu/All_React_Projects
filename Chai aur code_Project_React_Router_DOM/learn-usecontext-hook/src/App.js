import React,{useState} from "react";
import './App.css';
import { GlobalInfo } from "./hooks/GlobalInfo";
import Child from "./components/Child";
import LeftChild from "./components/LeftChild";

function App() {
   const [color,setColor] = useState("blue")
  const[day,setDay] = useState("Monday")

  const getDay = (item) =>{
    console.log(item)
    setDay(item)
  }
  
   return (
    <GlobalInfo.Provider value = {{appcolor:color,getDay:getDay}}>
    <div>
      <h1>App Component</h1>
      <Child/>
      <LeftChild/>
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
