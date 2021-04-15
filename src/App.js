import React, {useState}  from 'react';
import DisplayWeather from "./components/DisplayWeather"
export default function App() {
  const [place, setPlace] = useState('');
  const [weather, setWeather] = useState({});

  const [err,setErr] = useState('');
  
  const search_weather = (evt) =>{
    const API_key = "3de23798cdf41e70de721d4696b661bb";
    if (evt.key === "Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place},uk&APPID=${API_key}`)
      
      .catch( setErr("1")) //se der erro, seta erro pra 1
      
      .then(res => res.json())

      .then(result => {
        setPlace("");
        setErr("0");
        setWeather(result); 
        console.log(result);
      });

    }
  } 

  return (
    <div className="App">
      <main>
        <div className = "search-box">
          <input className="search-bar" onChange ={(e) => setPlace(e.target.value)} value={place} onKeyPress={search_weather} type = "text" placeholder = "Type the place..."/>
        </div>
        <br/>
        <br/> <br/><br/>
        <DisplayWeather weather = {weather} erro = {err}   /> 
      </main>
    </div>
  );
}

