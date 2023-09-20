import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import "./WeatherApp.css"

const API_KEY = '5fb88c191cccc13e5e879a8bb814207d';
const CITY_NAME = 'Delhi';
const units="mertic#"
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&units=${units}`;

function WeatherApp() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setForecast(response.data.list);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();

    // Refresh every 5 minutes
    const refreshInterval = setInterval(fetchData, 5 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []);
const groupedForecast = forecast.reduce((acc, data) => {
  const date = moment(data.dt_txt).format('YYYY-MM-DD');
  if (!acc[date]) {
    acc[date] = data;
  }
  return acc;
}, {});

return (
  <div className="weather-app">
    <h1>5-Day Weather Forecast for {CITY_NAME}</h1>
    <div className="forecast">
      {Object.entries(groupedForecast).map(([date, dailyData]) => (
        <div className="forecast-item" key={date}>
          <div className="forecast-date">
            {moment(date).format('MMM DD')}
          </div>
          <div className="forecast-icon">
            <img
              src={`http://openweathermap.org/img/w/${dailyData.weather[0].icon}.png`}
              alt={dailyData.weather[0].description}
            />
          </div>
          <div className="forecast-temp">
            <span>{Math.round(dailyData.main.temp_max-273.15)}°C</span>
            {/* <span>Low: {Math.round(dailyData.main.temp_min-273.15)}°C</span> */}
          </div>
          <div className="forecast-details">
            <span>Humidity: {dailyData.main.humidity}%</span>
            <span>Wind Speed: {dailyData.wind.speed} m/s</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default WeatherApp;