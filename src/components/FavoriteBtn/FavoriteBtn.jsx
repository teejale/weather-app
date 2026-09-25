import { useState } from "react";
import styles from "./FavoriteBtn.module.scss";
import { setFavorites, getFavorites } from "../../utils/localStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

const FavoriteBtn = ({ city, remove = false, favoriteChange }) => {
  const [isActive, setIsActive] = useState(() => {
    const favoriteCities = getFavorites();
    return favoriteCities.includes(city);
  });

  const handleToggle = () => {
    const favoriteCities = getFavorites();

    if (remove) {
      if (favoriteCities.includes(city)) {
        const removeFavorites = favoriteCities.filter(
          (favorite) => favorite !== city,
        );

        setFavorites(removeFavorites);
        setIsActive(false);
        if (favoriteChange) {
          favoriteChange();
        }
      }
      return;
    }
    if (favoriteCities.length >= 4) {
      alert("you cant have more than four favorites");
      return;
    }
    const addFavorites = [...favoriteCities, city];
    setFavorites(addFavorites);
    setIsActive(true);
  };

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon
        icon={solidStar}
        onClick={handleToggle}
        className={isActive ? styles.active : styles.notActive}
        role="button"
      />

      {remove
        ? "Remove favorite"
        : isActive
          ? "Remove favorite"
          : "Add favorite"}
    </div>
  );
};

export default FavoriteBtn;
