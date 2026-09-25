import { NavLink } from "react-router";
import styles from "./WeatherCard.module.scss";
import { useWeather } from "../../context/WeatherContext";

const WeatherCard = () => {
  const { weatherData, error } = useWeather();

  return (
    <div className={styles.wrapper}>
      <div>
        {weatherData && !error ? (
          <nav className={styles.navLink}>
            <ul>
              <li>
                <NavLink to="/WeatherDetails" role="link">
                  <h2>{weatherData?.name}</h2>
                  <h3>{Math.floor(weatherData?.main.temp)}°C</h3>
                  <h2>{weatherData?.weather[0].description}</h2>
                </NavLink>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
