import React, { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import SynagogeCard from "../SynagogeCard/SynagogeCard";

function SynagogeList(props) {
  console.log(props);

  const { data, error, loading } = useFetch(
    "http://localhost:5000/api/allsynagogues"
    // "https://63737d12348e9472990dd266.mockapi.io/synagoges"
  );
  console.log(data);
  if (error) {
    console.log(error);
  }
  //   const [details, setDetails] = useState();

  return (
    <div>
      <SynagogeCard
        synagoeDetails={{ data, error, loading }}
        cityToFetch={props.cityToFetch}
      />
    </div>
  );
}

export default SynagogeList;
