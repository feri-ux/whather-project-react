import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-7">
        <WeatherTemperature celsius={props.data.temperature}/>
          </div>
          <div className="col-5">
            <div className="city-name">{props.data.city}</div>
          </div>
        </div>
        <br />
  
        <div className="row">
          <div className="col-7">
            <div className="weather-icon">
                <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="col-5">
            <div className="extrainfo">Humidity: {props.data.humidity}%</div>
            <div className="extrainfo">Wind: {Math.round(props.data.wind)} Km/h</div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-5">
            <h2 className="text-capitalize">{props.data.description}</h2>
          </div>
          <div class="col-7">
            <div class="enjoy-weather">Enjoy this beautiful day!</div>
          </div>
        </div>
        <br />
  
        <div className="row">
          <div className="col-2 time">
            <div className="row">
          <div className="col-1">
              <FontAwesomeIcon icon={faClock} />
              </div>
          <div className="col-1 ">
              <span > <FormattedTime date={props.data.date}/></span>
            </div>
            </div>
          </div>
          <div className="col-10 dates">
            <div className="row">
          <div className="col-1 ">
              <FontAwesomeIcon icon={faCalendar} />
          </div>
          <div className="col-10 ">
              <span><FormattedDate date={props.data.date}/></span>
            </div>
            </div>
          </div>
        <hr align="left" color="#E4ECEF" className="hr" />
        </div>
  
  
        <div className="row">
          <div className="col-sm-2 weather-button">
            <div className="forecast-day">Fri</div>
            <br />
            <div className="forecast-icon">
            <FontAwesomeIcon icon={faCloudBolt} />
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
        </div>
    )
}