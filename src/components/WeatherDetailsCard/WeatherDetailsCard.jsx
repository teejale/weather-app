import { useEffect } from "react";
import { useWeather } from "../../context/WeatherContext";
import { getSavedCity } from "../../utils/localStorage";
import styles from "./WeatherDetailsCard.module.scss";
import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";

const WeatherDetailsCard = () => {
  const { weatherData, getWeather } = useWeather();

  const city = getSavedCity();

  useEffect(() => {
    if (city) {
      getWeather(city);
    }
  }, [city]);
  return (
    <div className={styles.container}>
      <FavoriteBtn city={city} remove={false} favorite={false} />
      <h2>{weatherData?.name}</h2>
      <br />
      <p>Temperature: {weatherData?.main?.temp}°C</p>
      <p>Description: {weatherData?.weather?.[0]?.description}</p>
      <p>Feels like : {weatherData?.main?.feels_like}°C</p>
      <p>Humidity : {weatherData?.main?.humidity}%</p>
      <p>Pressure : {weatherData?.main?.pressure}</p>
      <p>Wind Speed : {weatherData?.wind?.speed}m/s</p>
    </div>
  );
};

export default WeatherDetailsCard;
