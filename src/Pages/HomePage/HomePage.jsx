import SearchInput from "../../components/SearchInput/SearchInput";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h2>Weather</h2>
      <SearchInput />
      <WeatherCard />
    </div>
  );
};

export default HomePage;
