import { useEffect, useState } from "react";
import styles from "./FavoriteBtn.module.scss";
import { setFavoriteCity } from "../../utils/localStorage";
import { getSavedCity } from "../../utils/localStorage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const FavoriteBtn = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
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
