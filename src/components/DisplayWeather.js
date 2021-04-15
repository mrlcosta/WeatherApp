import React from "react";
import Greetings from "./Greetings"
import "../index.css"
import "../components/styles/DisplayWeather.css"

export default function DisplayWeather(props){

    const temperature = () => {
        if((typeof props.weather.main != "undefined" )){
          return(
            <section>

              <section className = "date">
                <p>Monday, april 12/2021</p>
              </section>

              <section className = "celcius-box">
                <p>{console.log(props.weather[0]) }</p>
                <p className = "celcius"> {Math.round(props.weather.main.temp - 273.15)}°C </p>
              </section>

              <section  className = "location">
                <p> In {props.weather.name} </p>
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