import { useSearchParams } from "react-router";
import SearchInput from "../../components/SearchInput/SearchInput";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { getFavorites } from "../../utils/localStorage";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";

const HomePage = () => {
  // useEffect(() => {
  //   setFavorites(getFavorites());
  // }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <h2>Search weather from all around the world</h2>
      </div>
      <SearchInput />
      <WeatherCard />
      {/* <div>
        {favorites.map((city) => (
          <p key={city}>{city}</p>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
