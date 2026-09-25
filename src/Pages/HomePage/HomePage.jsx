import SearchInput from "../../components/SearchInput/SearchInput";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from "./HomePage.module.scss";
import FavoritesCard from "../../components/FavoritesCard/FavoritesCard";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <h2>Search weather from all around the world</h2>
      </div>
      <SearchInput />
      <WeatherCard />
      <FavoritesCard />
    </div>
  );
};

export default HomePage;
