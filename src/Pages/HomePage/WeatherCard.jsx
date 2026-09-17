import { NavLink } from "react-router";
import styles from "./WeatherCard.module.scss";
const WeatherCard = () => {
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
      </nav>
    </div>
  );
};

export default WeatherCard;
