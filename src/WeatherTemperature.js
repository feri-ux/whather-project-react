import React,{ useState} from "react";


export default function(props){
    const[unit, setUnit]=useState("celsius")

    function ShowFahrenheit(event){
        event.preventDefault()
        setUnit("fahrenheit")
    }

    function ShowCelcius(event){
        event.preventDefault()
        setUnit("celsius")
    }

    if (unit === "celsius") {
        return(
            <div className="WeatherTemperature">
               <div className="temperature-large">
                  <span id="degree">{Math.round(props.celsius)} </span>
                  <span className="units">
                    <span className="celcius">
                      °C{" "}
                    </span>
                    <span className="verticalLine">| </span>
                    <a href="/" className="fahrenheit" onClick={ShowFahrenheit}>
                      °F
                    </a>
                  </span>
                </div>
            </div>
        )
    } else {
        let fahrenheit=( props.celsius * 9)/5 + 32 
        return(
            <div className="WeatherTemperature">
               <div className="temperature-large">
                  <span id="degree">{Math.round(fahrenheit)} </span>
                  <span className="units">
                    <a href="/" className="celcius" onClick={ShowCelcius}>
                      °C{" "}
                    </a>
                    <span className="verticalLine">|</span>
                    <span className="fahrenheit" >
                      °F
                    </span>
                  </span>
                </div>
            </div>
        );
    }
    
}