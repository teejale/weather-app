import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`,
      );

      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        getWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
