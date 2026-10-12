import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://unsplash.com/@jrmswny">Photo by Jerome on Unsplash</a>
      <a href="https://openweathermap.org/"> Weather from Openweathermap</a>
      <a href="https://github.com/teejale/weather-app">Github</a>
    </div>
  );
};

export default Footer;
