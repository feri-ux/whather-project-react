import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";


export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data)
    }
    console.log(props)

    let apiKey="e450bc345a80a08ada69fd5c714d871d"
    let latitude=props.coordinates.lat
    let longitude=props.coordinates.lon
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    return(
    <div className="WeatherForecast">
         <div className="row">
          <div className="col-sm-2 weather-button">
            <div className="forecast-day">Fri</div>
            <br />
            <div className="forecast-icon">
            <WeatherIcon code="01d"  size={40} color="black"/>
            </div>
            <div className="forecast-temperature">
              <span>25° </span>
              <span className="forecast-temperature-min"> 17°</span>
            </div>
          </div>
          <div className="col-sm-2 weather-button">
            <div className="forecast-day">Sut</div>
            <br />
            <div className="forecast-icon">
            <FontAwesomeIcon icon={faCloudBolt} />
            </div>
            <div className="forecast-temperature">
              <span>25°</span>
              <span className="forecast-temperature-min">17°</span>
            </div>
          </div>
          <div className="col-sm-2 weather-button">
            <div className="forecast-day">Sun</div>
            <br />
            <div className="forecast-icon">
            <FontAwesomeIcon icon={faCloudBolt} />
  
            </div>
            <div className="forecast-temperature">
              <span>25°</span>
              <span className="forecast-temperature-min">17°</span>
            </div>
          </div>
          <div className="col-sm-2 weather-button">
            <div className="forecast-day">Mon</div>
            <br />
            <div className="forecast-icon">
            <FontAwesomeIcon icon={faCloudBolt} />
            </div>
            <div className="forecast-temperature">
              <span>25°</span>
              <span className="forecast-temperature-min">17°</span>
            </div>
          </div>
          <div className="col-sm-2 weather-button">
            <div className="forecast-day">Tue</div>
            <br />
            <div className="forecast-icon">
            <FontAwesomeIcon icon={faCloudBolt} />
            </div>
            <div className="forecast-temperature">
              <span>25°</span>
              <span className="forecast-temperature-min">17°</span>
            </div>
          </div>
        </div>
        <hr  align="left"  className="half-hr" />
  
        <div className="footer">
          <a href="https://github.com/feri-ux/whather-project-react" target="_blank" rel="noreferrer">
            Open-source code </a
          >
           by Asieh Kalantar
        </div>
        </div>)
}