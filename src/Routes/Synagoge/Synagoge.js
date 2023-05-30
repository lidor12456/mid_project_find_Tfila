import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import axios from "axios";
import styles from "./Synagoge.css";
import Table from "../AddSynagoge/components/Table/Table";

function Synagoge() {
  const [synagogeObj, setSynagogeObj] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const URL = "http://localhost:5000/api";
  // const URL = "https://63737d12348e9472990dd266.mockapi.io/synagoges";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${URL}/synagogues/${params.synagogeId}`
        );
        console.log(data);
        setSynagogeObj(data);
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await axios.delete(`${URL}/${params.synagogeId}`);
      console.log(data);

      setIsLoading(true);
    } catch (e) {
      setErrorMes(e.message);
    }
  };

  const handleUpdateSynagoge = async () => {
    try {
      setIsLoading(true);
      // const { data } =
      await axios.put(`${URL}/synagogues/${params.synagogeId}`, synagogeObj);

      setIsLoading(false);
    } catch (e) {
      setErrorMes(e.message);
    }
  };

  return (
    <div className="specific-synagoge">
      {errorMes && <h2>{errorMes}</h2>}

      <p>synagoge number :{params.synagogeId}</p>

      {isLoading && <h1 className="spinner">loading..</h1>}
      {synagogeObj && (
        <div style={{ overflowX: "auto" }}>
          <h1>{synagogeObj.name}</h1>
          <h4>City : {synagogeObj.city}</h4>
          <h4>Address : {synagogeObj.address}</h4>
          {/* <table className="tg">
            <thead>
              <tr>
                <th className="tg-0lax"></th>
                <th className="tg-0lax">Sunday</th>
                <th className="tg-0lax">Monday</th>
                <th className="tg-0lax">Tuesday</th>
                <th className="tg-0lax">Wednesday</th>
                <th className="tg-0lax">Thursday</th>
                <th className="tg-0lax">Friday</th>
                <th className="tg-0lax">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">Shacahrit</td>
                <td className="tg-0lax">
                  <input
                    type="time"
                    defaultValue={synagogeObj.SHACHARIT.Sunday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Sunday = [value];
                        return updateState;
                      });
                      // console.log(synagoeObj);
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Monday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Monday = value;
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Tuesday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Tuesday = [value];
                        return updateState;
                      });
                    }}
                  />{" "}
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Wednesday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Wednesday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Thursday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Thursday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Friday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Friday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Saturday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.SHACHARIT.Saturday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">Minha</td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Sunday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Sunday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Monday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Monday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Tuesday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Tuesday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Wednesday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Wednesday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Thursday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Thursday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Friday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Friday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.MINHA.Saturday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.MINHA.Saturday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">Arvit</td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Sunday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Sunday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Monday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Monday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Tuesday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Tuesday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Wednesday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Wednesday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Thursday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Thursday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Friday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Friday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.ARVIT.Saturday}
                    onChange={({ target: { value } }) => {
                      setSynagogeObj((prev) => {
                        const updateState = { ...prev };

                        updateState.ARVIT.Saturday = [value];
                        return updateState;
                      });
                    }}
                  />
                </td>
              </tr>
            </tbody>
            <br></br>
          </table> */}
          <Table synagoeObj={synagogeObj} setSynagogeObj={setSynagogeObj} />
          <button
            className="spec-btns"
            onClick={() => {
              handleDelete(synagogeObj.id);
              navigate("/");
            }}
          >
            Delete
          </button>
          <button
            className="spec-btns"
            onClick={() => {
              handleUpdateSynagoge();
              navigate("/");
            }}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default Synagoge;
