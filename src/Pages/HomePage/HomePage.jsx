import Weather from "../../Weather";
import styles from "./HomePage.module.scss";
import WeatherCard from "./WeatherCard";

// const HomePage = ({ homepage }) => {
//   if (!homepage) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div className={styles.homepage}>
//       <p>homepage</p>
//     </div>
//   );
// };
const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h2>Weather</h2>
      <Weather />
      <WeatherCard />
    </div>
  );
};

export default HomePage;
