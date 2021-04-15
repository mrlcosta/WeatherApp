import React from "react";
import "../index.css"
export default function greetings (){

    const greetings = ()=>{
        let today = new Date();
        let time = today.getHours();
        if (time >= 0 && time <= 18)
            return "good morning";
        else
            return "good night";
    }
   return(
    <p>{greetings()}</p>
   );

}