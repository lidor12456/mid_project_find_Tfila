import React from "react";
import CitiesBar from "../../Component/CitiesBar/CitiesBar";
import SynagogeList from "../../Component/SynagogeList/SynagogeList";
import bg1 from "./assets/imgs/bg1.jpg";
import styles from "./HomePage.css";

function HomePage() {
  return (
    <div className="main-page">
      <div className="bar">
        <CitiesBar />
      </div>
    </div>
  );
}

export default HomePage;
