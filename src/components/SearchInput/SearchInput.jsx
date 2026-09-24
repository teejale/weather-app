import { useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import styles from "./SearchInput.module.scss";
import { setSavedCity } from "../../utils/localStorage";

const SearchInput = () => {
  const { getWeather } = useWeather();
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedCity(city);
    getWeather(city);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter city name to search for weather
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleInputChange}
          />
        </label>
        <div className={styles.searchBtn}>
          <button type="submit">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
