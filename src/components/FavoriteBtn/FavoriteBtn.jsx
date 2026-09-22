import styles from "./FavoriteBtn.module.scss";

const FavoriteBtn = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.favoriteBtn}>Add to favorite</button>
    </div>
  );
};

export default FavoriteBtn;
