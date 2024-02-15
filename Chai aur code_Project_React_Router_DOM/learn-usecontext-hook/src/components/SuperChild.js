import React,{useContext} from "react"

import { GlobalInfo } from "../hooks/GlobalInfo"

function SuperChild(){
    const{appcolor,getDay} = useContext(GlobalInfo);

    // How will you pass the data from from Children to parent
  const day = "sunday";

    return (<div>
        <h1 style={{color:appcolor}}>
            SuperChild Component
        </h1>
        <button onClick={()=>getDay(day)}>Click Me</button>
        
    </div>)
}

export default SuperChild;