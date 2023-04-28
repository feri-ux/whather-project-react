import React, { useState, useEffect,  } from "react"
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false)
  let [forecast, setForecast]=useState(null)

  useEffect(()=>{
    setLoaded(false);
  }, [props.coordinates]);


    function handleResponse(response){
        setForecast(response.data.daily)
        setLoaded(true)
    }
    
    if (loaded) {
      return(
        <div className="WeatherForecast">
             <div className="row">
              {forecast.map(function(dailyForecast, index){
                if (index < 5) {
                  return(
                    <div className="col-sm-2 weather-button" key={index}>
                      <WeatherForecastDay data={dailyForecast}/>
                    </div>
                  );
                }else{
                  return null
                }
              })}
            <hr  align="left"  className="half-hr" />
            <div className="footer">

              <a href="https://github.com/feri-ux/whather-project-react" target="_blank" rel="noreferrer">
                Open-source code </a
              >
               by Asieh Kalantar
            </div>
            </div>
            </div>
            )
    } else {
      let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
      let latitude=props.coordinates.lat
      let longitude=props.coordinates.lon
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(handleResponse)
      return null;
    }
}