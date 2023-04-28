import React,{useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const[weatherData, setWeatherData]=useState({ready:false})
  const[city, setCity]=useState(props.defaultCity)

  function handleResponse(response){
    console.log(response.data)
    setWeatherData({
    ready:true,
    coordinates:response.data.coord,
    temperature:response.data.main.temp,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
    });

  }

  function Search(){
    const apiKey="1a6432c5ca7b6f9b0bee45c98d54ea71"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event){
    event.preventDefault()
    Search()
  }
  
  function handleCityChange(event){
    setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col-2">
              <input type="submit" value="search" className="btn" />
            </div>
            <div className="col-2">
              <input type="submit" value="Current" className="location" />
            </div>
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    Search()
    return "loading..."
  }
}
