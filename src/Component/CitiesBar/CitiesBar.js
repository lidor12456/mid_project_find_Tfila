import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import SynagogeList from "../SynagogeList/SynagogeList";
function CitiesBar() {
  // const [cityChosen, setCityChosen] = useState();
  const userInput = useRef();

  /**
   * Select a street by city in Israel
   * Cities data is from https://data.gov.il/dataset/citiesandsettelments
   * API documentation https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_search
   */

  // REST API URL
  const api_url = "https://data.gov.il/api/3/action/datastore_search";
  // Cities endpoint
  const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
  // Streets endpoint
  const streets_resource_id = "a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3";
  // Field names
  const city_name_key = "שם_ישוב";
  const street_name_key = "שם_רחוב";
  // dataset ids
  const cities_data_id = "cities-data";
  const streets_data_id = "streets-data";
  // input elements
  const cities_input = document.getElementById("city-choice");
  const streets_input = document.getElementById("street-choice");
  let userChoice = "initial";

  useEffect(() => {
    //! edit/remove street parts
    /**
     * Get data from gov data API
     * Uses Axios just because it was easy
     */
    const getData = (resource_id, q = "", limit = "100") => {
      console.log("sending", resource_id, q);
      return axios.get(api_url, {
        params: { resource_id, q, limit },
        responseType: "json",
      });
    };

    /**
     * Parse records from data into 'option' elements,
     * use data from key 'field_name' as the option value
     */
    const parseResponse = (records = [], field_name) => {
      const parsed =
        records
          .map((record) => `<option value="${record[field_name].trim()}">`)
          .join("\n") || "";
      //console.log("parsed", field_name, parsed);
      return Promise.resolve(parsed);
    };

    /**
     * Fetch data, parse, and populate Datalist
     */
    const populateDataList = (id, resource_id, field_name, query, limit) => {
      const datalist_element = document.getElementById(id);
      console.log(datalist_element);
      if (!datalist_element) {
        console.log(
          "Datalist with id",
          id,
          "doesn't exist in the document, aborting"
        );
        return;
      }
      getData(resource_id, query, limit)
        .then((response) =>
          parseResponse(response?.data?.result?.records, field_name)
        )
        .then((html) => (datalist_element.innerHTML = html))
        .catch((error) => {
          console.log("Couldn't get list for", id, "query:", query, error);
        });
    };

    // ---- APP ----

    /**
     * Populate cities.
     * There are about 1300 cities in Israel, and the API upper limit is 32000
     * so we can safely populate the list only once.
     */
    populateDataList(
      cities_data_id,
      cities_resource_id,
      city_name_key,
      undefined,
      32000
    );
    // userChoice = cities_input;
    /**
     * Populate streets
     * Update the streets list on every city name change
     * (assuming there aren't more than 32,000 streets in any city)
     */
    // cities_input.addEventListener("change", (event) => {
    //   populateDataList(
    //     streets_data_id,
    //     streets_resource_id,
    //     street_name_key,
    //     {
    //       שם_ישוב: cities_input.value,
    //     },
    //     32000
    //   );
    // });
  }, []);
  return (
    <div>
      <form action="">
        <div className="form-field" id="city-selection">
          {/* <label
            for="city-choice"
            onChange={(event) => {
              populateDataList(
                streets_data_id,
                streets_resource_id,
                street_name_key,
                {
                  שם_ישוב: cities_input.value,
                },
                32000
              );
            }}
          ></label> */}
          select city(type) &nbsp;
          <input
            list="cities-data"
            id="city-choice"
            name="city-choice"
            ref={userInput}
            // value={cityChosen}
          />
          <button
            onClick={(e) => {
              e.preventDefault();

              userChoice = userInput.current.value;
              // console.log(userInput);
              console.log(userChoice);
            }}
          >
            send
          </button>
          <datalist id="cities-data">
            <option value="">טוען רשימת ערים...</option>
          </datalist>
        </div>
        <SynagogeList cityToFetch={userChoice} />
      </form>
    </div>
  );
}
//! fix this bug in props - SynagogeList doesnt get him after its update - only the initial value

export default CitiesBar;
