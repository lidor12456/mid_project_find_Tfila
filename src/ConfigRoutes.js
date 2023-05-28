import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage/HomePage";
import Synagoge from "./Routes/Synagoge/Synagoge";
import AddSynagoge from "./Routes/AddSynagoge/AddSynagoge";
import E404 from "./Routes/E404/E404";
function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:synagogeId" element={<Synagoge />} />
      <Route path="/addsynagoge" element={<AddSynagoge />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  );
}
export default ConfigRoutes;
