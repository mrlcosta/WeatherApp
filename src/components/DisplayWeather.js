import React from "react";
import Greetings from "./Greetings"
import "../index.css"
import "../components/styles/DisplayWeather.css"

export default function DisplayWeather(props){

    const temperature = () => {
        if((typeof props.weather.main != "undefined" )){
          return(
            <section>

              <section className = "celcius-box">
                <p>{console.log(props.weather[0]) }</p>
                <p className = "celcius"> {Math.round(props.weather.main.temp - 273.15)}°C </p>
              </section>

              <section  className = "location">
                <p>{props.weather.weather[0].main} in {props.weather.name} </p>
              </section >

            </section>
          );
        }else if(props.erro === "1"){
          return(
            <div>
              <p> Can't find your addres. Please, verify and type again. </p>
            </div>
          );
        }
        else{
          return(
              <div>
                <Greetings/>
                <br/>
                <p> just chill and relax</p>
              </div>
            );
        }
      }


    return(
        <section>{temperature()}</section>
    );
}