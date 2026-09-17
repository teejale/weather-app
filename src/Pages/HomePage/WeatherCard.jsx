import { NavLink } from "react-router";
import styles from "./WeatherCard.module.scss";
import { useWeather } from "../../context/WeatherContext";

const WeatherCard = () => {
  const { city, setCity, weatherData, getWeather } = useWeather();
  return (
    <div class={styles.wrapper}>
      <nav className={styles.navLink}>
        <ul>
          <li>
            <NavLink
              to="/WeatherDetails"
              // className={({ isActive }) =>
              //   isActive ? styles.activeLink : styles.link
              // }
            >
              {/* <h2>{weatherData.city}</h2>
              <h3>{weatherData.main.temp}°C</h3> */}
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
