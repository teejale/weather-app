import styles from "./WeatherDetails.module.scss";
import WeatherDetailsCard from "../../components/WeatherDetailsCard/WeatherDetailsCard";

const WeatherDetails = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <WeatherDetailsCard />
      </div>
    </>
  );
};

export default WeatherDetails;
