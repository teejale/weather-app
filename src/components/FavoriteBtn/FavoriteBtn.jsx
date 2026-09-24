import { useEffect, useState } from "react";
import styles from "./FavoriteBtn.module.scss";
import { setFavorites, getFavorites } from "../../utils/localStorage";
import { getSavedCity } from "../../utils/localStorage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const FavoriteBtn = ({ city }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const [isActive, setIsActive] = useState(() => {
    const favoriteCities = getFavorites();
    return favoriteCities.includes(city);
  });

  const handleToggle = () => {
    setIsActive(!isActive);
    const favoriteCities = getFavorites();
    if (favoriteCities.includes(city)) {
      const addFavorites = favoriteCities.filter(
        (favorite) => favorite !== city,
      );
      setFavorites(addFavorites);
    } else {
      const addFavorites = [...favoriteCities, city];
      setFavorites(addFavorites);
    }
    console.log("added to favorite");
  };

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon
        icon={faStar}
        onClick={handleToggle}
        className={isActive ? styles.active : styles.notActive}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        role="button"
      />

      {isActive ? "Remove favorite" : "Add favorite"}
    </div>
  );
};

export default FavoriteBtn;
