import React, { useState } from "react";
import axios from "axios";

function AddSynagoge() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const [synagoeObj, setSynagogeObj] = useState({
    // id: new Date().getTime().toString(),
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
        "https://63737d12348e9472990dd266.mockapi.io/synagoges",
        synagoeObj
      );
    } catch (e) {
      setErrorMes(e.message);
    }
  };

  return (
    <div>
      <input
        // value={inputValBrand}
        placeholder="name"
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
        // value={inputValBrand}
        placeholder="city"
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
        // value={inputValBrand}
        placeholder="address"
        onChange={({ target: { value } }) => {
          setSynagogeObj((prev) => {
            const updateState = { ...prev };

            updateState.adrees = value;
            return updateState;
          });
          console.log(synagoeObj);
        }}
      />
      <table className="tg">
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
            <td className="tg-0lax">Shacharit</td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Sunday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              {" "}
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Monday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              {" "}
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Tuesday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              {" "}
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Wednesday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              {" "}
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Thursday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              {" "}
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Friday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              {" "}
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.SHACHARIT.Saturday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">Minha</td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Sunday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Monday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Tuesday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Wednesday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Thursday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Friday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.MINHA.Saturday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">Arvit</td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Sunday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Monday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Tuesday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Wednesday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Thursday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Friday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
            <td className="tg-0lax">
              <input
                // value={inputValBrand}
                placeholder=""
                onChange={({ target: { value } }) => {
                  setSynagogeObj((prev) => {
                    const updateState = { ...prev };

                    updateState.ARVIT.Saturday = [value];
                    return updateState;
                  });
                  console.log(synagoeObj);
                }}
              />
            </td>
          </tr>
        </tbody>
        <br></br>
      </table>
      <button onClick={handleAddSynagoge}>Add Synagoge</button>
    </div>
  );
}

export default AddSynagoge;
