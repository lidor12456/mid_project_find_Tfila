import React from "react";
import CitiesBar from "../../Component/CitiesBar/CitiesBar";
import SynagogeList from "../../Component/SynagogeList/SynagogeList";

function HomePage() {
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
  let structureData = Object.entries(obj);
  // console.log(structureData);
  return (
    // <div>
    //   <CitiesBar />
    //   {structureData.map((item, i) => {
    //     if (i > 2) {
    //       let objToString = JSON.stringify(item);
    //       return (
    //         <div>
    //           <p>{objToString.replace(/[^a-zA-Z0-9]/g, " ")}</p>
    //           <br></br>
    //         </div>
    //       );
    //     } else {
    //       return <p>{item.join(" ")}</p>;
    //     }
    //   })}
    // </div>
    <div>
      <SynagogeList />
    </div>
  );
}

export default HomePage;
