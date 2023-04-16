import React from "react";

export default function FormttedData(props){
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    let month=months[props.date.getMonth()];
    let day= days[props.date.getDay()];
    let date= props.date.getDate();
    let year=props.date.getUTCFullYear();
    let hours=props.date.getHours();
    if (hours<10){
        hours=`0${hours}`
    }
    let minutes= props.date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`
    }
return(
    <div>
    <div>{hours}:{minutes}</div>
    <div> {day}, {month} {date}, {year}</div>
    </div>
);
}