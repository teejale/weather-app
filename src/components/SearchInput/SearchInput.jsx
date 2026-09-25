import { useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import styles from "./SearchInput.module.scss";
import { setSavedCity } from "../../utils/localStorage";

const SearchInput = () => {
  const { getWeather, error } = useWeather();
  const [city, setCity] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setCity(userInput);
    setIsFormValid(!/\d/.test(userInput));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSavedCity(city);
      getWeather(city);
      return;
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter city name to search for weather
          <input
            id="searchField"
            type="text"
            placeholder="City"
            value={city}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.errorMsg} htmlFor="searchField">
          {isFormValid && !error ? "" : <div> Could not find city</div>}
        </label>
        <div className={styles.searchBtn}>
          <button type="submit">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
