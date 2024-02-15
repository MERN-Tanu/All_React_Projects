import { GlobalInfo } from "../hooks/GlobalInfo";
import React,{ useContext } from "react";

function LeftChild(){
    const{appcolor} = useContext(GlobalInfo);

    return (<div>
        <h1 style={{color:appcolor}}>LeftChild Component</h1>
    </div>)
}
export default LeftChild;