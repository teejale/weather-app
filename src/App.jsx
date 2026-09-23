import { Routes, Route } from "react-router";
import "./App.scss";

import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Layout/Layout";
import WeatherDetails from "./Pages/WeatherDetails/WeatherDetails";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="WeatherDetails" element={<WeatherDetails />}></Route>
          </Route>
        </Routes>
      </WeatherProvider>
    </>
  );
}

export default App;
