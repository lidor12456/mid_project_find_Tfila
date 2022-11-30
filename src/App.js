import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useFetch } from "./Component/SynagogeList/hooks/useFetch";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";

import SynagogeList from "./Component/SynagogeList/SynagogeList";

import Nav from "./Component/Nav/Nav";
import HomePage from "./Routes/HomePage/HomePage";
import Synagoge from "./Routes/Synagoge/Synagoge";
import AddSynagoge from "./Routes/AddSynagoge/AddSynagoge";
// import Results from "./Component/Results/Results";
import E404 from "./Routes/E404/E404";

function App() {
  const obj = {
    id: "0",
    name: "my-synagoge",
    adrees: "some-adress",
    SHACHARIT: {
      Sunday: ["6:00", "7:00"],
      Monday: ["6:00", "7:00"],
      Tuesday: ["6:00", "7:00"],
      Wednesday: ["6:00", "7:00"],
      Thursday: ["6:00", "7:00"],
      Friday: ["6:00", "7:00", "8:00"],
      Saturday: ["8:00"],
    },
    MINHA: {
      Sunday: ["13:00", "16:30"],
      Monday: ["13:00", "16:30"],
      Tuesday: ["13:00", "16:30"],
      Wednesday: ["13:00", "16:30"],
      Thursday: ["13:00", "16:30"],
      Friday: ["13:00", "Knisat Shabat"],
      Saturday: ["13:00"],
    },
    ARVIT: {
      Sunday: ["20:00"],
      Monday: ["20:00"],
      Tuesday: ["20:00"],
      Wednesday: ["20:00"],
      Thursday: ["20:00"],
      Friday: ["Knisat Shabat"],
      Saturday: ["Zeet Shabat"],
    },
  };
  let test = Object.entries(obj);
  console.log(test);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/results" element={<Results />} /> */}
        <Route path="/:synagogeId" element={<Synagoge />} />
        <Route path="/addsynagoge" element={<AddSynagoge />} />
        <Route path="*" element={<E404 />} />
      </Routes>

      {/* <SynagogeList /> */}
    </div>
  );
}

export default App;
