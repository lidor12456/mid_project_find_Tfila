import React, { useContext } from "react";
import SynagogeList from "../SynagogeList/SynagogeList";
import { myContext } from "../CitiesBar/CitiesBar";

function Results() {
  const userChoice = useContext(myContext);
  console.log("rersult");
  return <SynagogeList cityToFetch={userChoice} />;
}

export default Results;
