import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

import styles from "./AddSynagoge.css";
import Input from "./components/Input/Input";
import AddInputBtn from "./components/AddInputBtn/AddInputBtn";
import Table from "./components/Table/Table";

function AddSynagoge() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const [synagoeObj, setSynagogeObj] = useState({
    name: "",
    city: "",
    adrees: "",
    SHACHARIT: {
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    },
    MINHA: {
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    },
    ARVIT: {
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    },
  });

  const handleAddSynagoge = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/addsynagogue",
        // "https://63737d12348e9472990dd266.mockapi.io/synagoges",
        synagoeObj
      );
    } catch (e) {
      setErrorMes(e.message);
    }
  };

  return (
    <div className="add-synagoge">
      <h1>Add Synagoge</h1>
      <div className="details-inputs">
        <input
          placeholder="Name"
          onChange={({ target: { value } }) => {
            setSynagogeObj((prev) => {
              const updateState = { ...prev };

              updateState.name = value;
              return updateState;
            });
            console.log(synagoeObj);
          }}
        />
        <input
          placeholder="City"
          onChange={({ target: { value } }) => {
            setSynagogeObj((prev) => {
              const updateState = { ...prev };

              updateState.city = value;
              return updateState;
            });
            console.log(synagoeObj);
          }}
        />
        <input
          placeholder="Address"
          onChange={({ target: { value } }) => {
            setSynagogeObj((prev) => {
              const updateState = { ...prev };

              updateState.adrees = value;
              return updateState;
            });
            console.log(synagoeObj);
          }}
        />
      </div>
      <Table synagoeObj={synagoeObj} setSynagogeObj={setSynagogeObj} />

      <button
        className="add-synagoge-btn"
        onClick={() => {
          handleAddSynagoge();
          navigate("/");
        }}
      >
        Add Synagoge
      </button>
    </div>
  );
}

export default AddSynagoge;
