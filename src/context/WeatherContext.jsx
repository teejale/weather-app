import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";
const baseUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.OPENWEATHER_API_KEY}`;

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const [favoritesWeather, setFavoritesWeather] = useState([]);

  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(baseUrl(city));
      return res.data;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  const getWeather = async (city) => {
    setError(null);
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  const getFavoritesWeather = async (cities) => {
    setError(null);
    const data = await Promise.all(
      cities.map(async (city) => {
        const data = await fetchWeather(city);
        if (data) {
          data.savedCity = city;
        }
        return data;
      }),
    );
    setFavoritesWeather(data.filter((weather) => weather !== null));
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        error,
        setError,
        getWeather,
        favoritesWeather,
        getFavoritesWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
