import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import { getFavorites } from "../../utils/localStorage";
import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";
import styles from "./FavoritesCard.module.scss";
import { getWeatherIcon } from "../../utils/weatherIcon";

const FavoritesCard = () => {
  const { favoritesWeather, getFavoritesWeather } = useWeather();
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const cities = getFavorites();
    setFavorites(cities);
    getFavoritesWeather(cities);
  }, []);

  const refreshFavorites = () => {
    const cities = getFavorites();
    setFavorites(cities);
    getFavoritesWeather(cities);
  };

  return (
    <div className={styles.favoritesWrapper}>
      <h2>Favorites</h2>
      {favoritesWeather.map((weather) => (
        <div key={weather.id} className={styles.favoritesCard}>
          <h3>{weather.name}</h3>
          <h3>{weather.main.temp}°C</h3>
          <h3>{weather.weather[0].description}</h3>
          <img
            src={getWeatherIcon(weather.weather[0].icon)}
            alt="weather icon"
            className={styles.weatherIcon}
          />{" "}
          <FavoriteBtn
            city={weather.savedCity}
            remove={true}
            favorite={true}
            favoriteChange={refreshFavorites}
          />
        </div>
      ))}
    </div>
  );
};

export default FavoritesCard;
