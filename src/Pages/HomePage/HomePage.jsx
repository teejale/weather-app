import Weather from "../../components/SearchInput/SearchInput";
import styles from "./HomePage.module.scss";
import WeatherCard from "./WeatherCard";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h2>Weather</h2>
      <Weather />
      <WeatherCard />
    </div>
  );
};

export default HomePage;
