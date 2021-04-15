import React from "react";
import Greetings from "./Greetings";
import "../index.css";
import "../components/styles/DisplayWeather.css";

export default function DisplayWeather({ weather, erro }) {
  console.log(erro, weather, "componente");
  return (
    <section>
      {weather.main && (
        <section>
          <section className="celcius-box">
            <p className="celcius">
              {Math.round(weather.main.temp - 273.15)}°C{" "}
            </p>
          </section>

          <section className="location">
            <p>
              {weather.weather[0].main} in {weather.name}{" "}
            </p>
          </section>
        </section>
      )}

      {erro === "1" && (
        <div>
          <p> Can't find your addres. Please, verify and type again. </p>
        </div>
      )}

      {erro !== "1" && !weather.main && (
        <div>
          <Greetings />
          <br />
          <p> just chill and relax</p>
        </div>
      )}
    </section>
  );
}
