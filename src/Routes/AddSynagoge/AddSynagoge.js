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
        // {
        //   id: "0",
        //   name: "my-synagoge",
        //   adrees: "some-adress",
        //   SHACHARIT: {
        //     Sunday: ["6:00", "7:00"],
        //     Monday: ["6:00", "7:00"],
        //     Tuesday: ["6:00", "7:00"],
        //     Wednesday: ["6:00", "7:00"],
        //     Thursday: ["6:00", "7:00"],
        //     Friday: ["6:00", "7:00", "8:00"],
        //     Saturday: ["8:00"],
        //   },
        //   MINHA: {
        //     Sunday: ["13:00", "16:30"],
        //     Monday: ["13:00", "16:30"],
        //     Tuesday: ["13:00", "16:30"],
        //     Wednesday: ["13:00", "16:30"],
        //     Thursday: ["13:00", "16:30"],
        //     Friday: ["13:00", "Knisat Shabat"],
        //     Saturday: ["13:00"],
        //   },
        //   ARVIT: {
        //     Sunday: ["20:00"],
        //     Monday: ["20:00"],
        //     Tuesday: ["20:00"],
        //     Wednesday: ["20:00"],
        //     Thursday: ["20:00"],
        //     Friday: ["Knisat Shabat"],
        //     Saturday: ["Zeet Shabat"],
        //   },
        // }
      );

      // MORDI const testData = axios.put("https://some.com", objectState);
      // setTaskArr((prev) => [...prev, data]);
      // setInputValBrand("");
      // setInputValModel("");
      // setInputImg("");
      // setIsLoading(false);
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
            <td className="tg-0lax">minha</td>
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
            <td className="tg-0lax">arvit</td>
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
          <button onClick={handleAddSynagoge}>send</button>
        </tbody>
        <br></br>
      </table>
    </div>
  );
}

export default AddSynagoge;
