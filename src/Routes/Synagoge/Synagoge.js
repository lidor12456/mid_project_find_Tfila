import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import axios from "axios";

function Synagoge() {
  const [synagogeObj, setSynagogeObj] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://63737d12348e9472990dd266.mockapi.io/synagoges/${params.synagogeId}`
        );
        console.log(data);
        setSynagogeObj(data);
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
        setTimeout(() => {
          setErrorMes(null);
        }, 1500);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await axios.delete(
        `https://63737d12348e9472990dd266.mockapi.io/synagoges/${params.synagogeId}`
      );
      console.log(data);

      setIsLoading(true);
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  const handleUpdateSynagoge = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `https://63737d12348e9472990dd266.mockapi.io/synagoges/${params.synagogeId}`,
        synagogeObj
      );

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
        <div>
          <h1>{synagogeObj.name}</h1>
          <h4>Address : {synagogeObj.adrees}</h4>
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-0lax"></th>
                <th className="tg-0lax">sun</th>
                <th className="tg-0lax">mon</th>
                <th className="tg-0lax">thu</th>
                <th className="tg-0lax">wed</th>
                <th className="tg-0lax">thir</th>
                <th className="tg-0lax">fri</th>
                <th className="tg-0lax">sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">shachrit</td>
                <td className="tg-0lax">
                  <input
                    // value={inputValBrand}
                    value={synagogeObj.SHACHARIT.Sunday}
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

                        updateState.SHACHARIT.Monday = [value];
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
                <td className="tg-0lax">minha</td>
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
                <td className="tg-0lax">arvit</td>
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
          </table>
          <button
            onClick={() => {
              handleDelete(synagogeObj.id);
              navigate("/");
            }}
          >
            Delete
          </button>
          <button
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
