import React, { useState } from "react";
import DisplayWeather from "./components/DisplayWeather";
import ShowDate from "./components/ShowDate";

export default function App() {
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState({});

  const [err, setErr] = useState("");

  const search_weather = (evt) => {
    const API_key = "3de23798cdf41e70de721d4696b661bb";

    if (evt.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${place},uk&APPID=${API_key}`
      )
        .catch(setErr("1")) //se der erro, seta erro pra 1

        .then((res) => res.json())

        .then((result) => {
          if (result.cod === "200" || result.cod === 200) {
            console.log(result, "oi");
            //setPlace("");
            setErr("0");
            setWeather(result);
            console.log(result);
          } else {
            result = setErr("1");
            setWeather({});
          }
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? Math.round(weather.main.temp - 273.15) > 22
            ? "App Warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            onChange={(e) => setPlace(e.target.value)}
            onKeyPress={search_weather}
            type="text"
            placeholder="Type the place..."
          />
        </div>
        <br />
        <br /> <br />
        <br />
        <ShowDate weather={weather} />
        <DisplayWeather weather={weather} erro={err} />
      </main>
    </div>
  );
}
