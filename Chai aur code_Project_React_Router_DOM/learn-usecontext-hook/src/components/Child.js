import React,{useContext} from "react";
import { GlobalInfo } from "../hooks/GlobalInfo";
import SuperChild from "./SuperChild"



export default function Child(){
    // Using useContext hook
   const {appcolor} = useContext(GlobalInfo); // receiving a value from parent to child

   return (
   
   <div>
    <h1 style={{color:appcolor}}>Child Component</h1>
    <SuperChild/>
   </div>)
}

