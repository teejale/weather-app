import { Routes, Route } from "react-router";
import { useState } from "react";
import "./App.scss";

import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Layout from "./Layout/Layout";
import Weather from "./Weather";

function App() {
  // const [homepage, setHomepage] = useState(null);

  // const [about, setAbout] = useState(null);

  return (
    <>
      {/* <Weather /> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<HomePage homepage={homepage} />}></Route>
          <Route path="about" element={<About about={about} />}></Route>
        </Route> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
