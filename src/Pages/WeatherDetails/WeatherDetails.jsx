import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";
import { useWeather } from "../../context/WeatherContext";
import styles from "./WeatherDetails.module.scss";
import { getSavedCity } from "../../utils/localStorage";
import { useEffect } from "react";

const WeatherDetails = () => {
  const { weatherData, getWeather } = useWeather();

  const city = getSavedCity();

  useEffect(() => {
    console.log(city);

    if (city) {
      getWeather(city);
    }
  }, [city]);

  return (
    <>
      <div className={styles.wrapper}>
        <FavoriteBtn city={city} />
        <div className={styles.container}>
          <h2>{weatherData?.name}</h2>
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
