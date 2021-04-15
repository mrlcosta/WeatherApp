import React from "react";
import "../index.css"
export default function ShowDate (props){


    const ReturnDate = ()=>{

        if((typeof props.weather.main != "undefined" )){
            
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let date = new Date();
            let dayWeek = days[date.getDay()];
            date = String(date).slice(3,15)
            
            return (
                <div>
                    {`${dayWeek}, ${date}`}
                </div>
                
            );
        }
    }
   return(
    <p>{ReturnDate()}</p>
   );

}