import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import snow_icon from "../assets/snow.png";
import rain_icon from "../assets/rain.png";
import wind_icon from "../assets/wind.png";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
        return;
      }
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        loaction: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.log(error);
    }
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          // onChange={(value) => setValue(value)}
          placeholder="Search"
          ref={inputRef}
        />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} className="weather-icon" alt="" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.loaction}</p>
          <div className="weather_data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} km/hr</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Weather;
