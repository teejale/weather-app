import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.scss";

import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Layout from "./Layout/Layout";
import Weather from "./components/SearchInput/SearchInput";
import WeatherDetails from "./Pages/WeatherDetails/WeatherDetails";
import WeatherContext from "./context/WeatherContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="WeatherDetails" element={<WeatherDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
