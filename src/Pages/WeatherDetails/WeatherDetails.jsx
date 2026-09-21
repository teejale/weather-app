import { useEffect } from "react";
import FavoriteBtn from "../../components/FavoriteBtn";
import { useWeather } from "../../context/WeatherContext";
import styles from "./WeatherDetails.module.scss";

const WeatherDetails = () => {
  const { weatherData } = useWeather();
  return (
    <>
      <FavoriteBtn />
      <div className={styles.wrapper}>
        <div>
          <h2>This is weather details</h2>
          <h3>{weatherData?.name}</h3>
          <p>Temperature: {weatherData?.main?.temp}°C</p>
          <p>Description: {weatherData?.weather?.[0]?.description}</p>
          <p>Feels like : {weatherData?.main?.feels_like}°C</p>
          <p>Humidity : {weatherData?.main?.humidity}%</p>
          <p>Pressure : {weatherData?.main?.pressure}</p>
          <p>Wind Speed : {weatherData?.wind?.speed}m/s</p>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
