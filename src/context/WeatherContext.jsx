import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const getWeather = async (city) => {
    try {
      setError(null);
      // setWeatherData(null);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`,
      );

      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        error,
        setError,
        getWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
