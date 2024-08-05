import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
// import cloud_icon from "../assets/cloud.png";
// import drizzle_icon from "../assets/dizzle.png";
// import snow_icon from "../assets/snow.png";
// import rain_icon from "../assets/rain.png";
import wind_icon from "../assets/wind.png";
// import { useState } from "react";

const Weather = () => {
  // const [value, setValue] = useState();

  // const search = async () => {
  //   try {
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q={${value}}&appid={${REACT_APP_WEATHER_API}}`;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          // onChange={(value) => setValue(value)}
          placeholder="Search"
        />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} className="weather-icon" alt="" />
      <p className="temperature">16°C</p>
      <p className="location">London</p>
      <div className="weather_data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.5 km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
