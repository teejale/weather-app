import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (forecast) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2b9dfc98aa482ccb98bc81869e11b093`,
      );
      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getWeather();
  // }, []);

  // const handleInputChange = (e) => {
  //   setCity(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getWeather();
  // };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        getWeather,
      }}
    >
      {forecast.children}
    </WeatherContext.Provider>
  );
};
