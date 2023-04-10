import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tehran",
    date: "Saturday, March 18, 2023",
    time: "10:43",
    description: "few clouds",
    imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    humidity: "38",
    wind: "5"
  };
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-8">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter a city..."
                className="form-control"
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

      <div className="row">
        <div className="col-7">
          <div className="temperature-large">
            <span id="degree">12 </span>
            <span className="units">
              <a href="#" className="celcius">
                °C{" "}
              </a>
              <span className="verticalLine">|</span>
              <a href="#" className="fahrenheit">
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="col-5">
          <div className="city-name">{weatherData.city}</div>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-7">
          <div>
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="weather-icon"
            />
          </div>
        </div>
        <div className="col-5">
          <div className="extrainfo">Humidity: {weatherData.humidity}%</div>
          <div className="extrainfo">Wind: {weatherData.wind} Km/h</div>
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <h2>{weatherData.description}</h2>
        </div>
        <div class="col-7">
          <div class="enjoy-weather">Enjoy this beautiful day!</div>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-5 time">
          <div>
            <FontAwesomeIcon icon={faClock} />
            <span id="current-time"> {weatherData.time}</span>
          </div>
        </div>
        <div className="col-7">
          <div className="dates">
            <FontAwesomeIcon icon={faCalendar} />

            <i className="fa-regular fa-calendar"> {weatherData.date}</i>
            <span id="date"></span>
          </div>
        </div>
      </div>
      <hr align="left" color="#E4ECEF" className="hr" />


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
  );
}
