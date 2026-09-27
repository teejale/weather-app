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
          <p>Enter city name to search</p>
          <input
            id="searchField"
            type="text"
            placeholder="City"
            value={city}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="searchField">
          {isFormValid && !error ? (
            ""
          ) : (
            <div className={styles.errorMsg}>
              {" "}
              <p>Could not find city</p>
            </div>
          )}
        </label>
        <div className={styles.searchBtn}>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
