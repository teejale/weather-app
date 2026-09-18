import { NavLink } from "react-router";
import styles from "./WeatherCard.module.scss";
import { useWeather } from "../../context/WeatherContext";
import { useEffect } from "react";

const WeatherCard = () => {
  const { weatherData, getWeather } = useWeather();

  useEffect(() => {
    getWeather("Ivalo");
  }, []);
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navLink}>
        <ul>
          <li>
            <NavLink
              to="/WeatherDetails"
              // className={({ isActive }) =>
              //   isActive ? styles.activeLink : styles.link
              // }
            >
              <h2>{weatherData?.name}</h2>
              <h3>{weatherData?.main.temp}</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <nav className={styles.navLink}>
        <ul>
          <li>
            <NavLink
              to="/WeatherDetails"
              // className={({ isActive }) =>
              //   isActive ? styles.activeLink : styles.link
              // }
            >
              WeatherDetails
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={styles.navLink}>
        <ul>
          <li>
            <NavLink
              to="/WeatherDetails"
              // className={({ isActive }) =>
              //   isActive ? styles.activeLink : styles.link
              // }
            >
              WeatherDetails
            </NavLink>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default WeatherCard;
