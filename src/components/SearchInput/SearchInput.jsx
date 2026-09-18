import { useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const { weatherData, getWeather } = useWeather();
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <div className={styles.searchBtn}>
          <button type="submit">Get Weather</button>
        </div>
      </form>
      {weatherData ? (
        <div className={styles.wrapper}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default SearchInput;
