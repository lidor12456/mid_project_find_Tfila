import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import style from "./SynagogeCard.css";

function SynagogeCard(props) {
  let structureData;

  return (
    <div>
      {/* {console.log(props.synagoeDetails.data)} */}
      {props.synagoeDetails.loading && <div>Loading...</div>}
      {props.synagoeDetails.error ? (
        <h1>something wrong</h1>
      ) : (
        props.synagoeDetails.data && (
          <div>
            {props.synagoeDetails.data.map((item, i) => {
              return (
                // <p>SHACHARIT : {item.SHACHARIT.Sunday.join(" ")}</p>
                <div>
                  <Link to={`/${item.id}`}>
                    <h2>{item.name}</h2>
                  </Link>
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
                          {item.SHACHARIT.Sunday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.SHACHARIT.Monday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.SHACHARIT.Tuesday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.SHACHARIT.Wednesday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.SHACHARIT.Thursday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.SHACHARIT.Friday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.SHACHARIT.Saturday.join(" ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="tg-0lax">minha</td>
                        <td className="tg-0lax">
                          {item.MINHA.Sunday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.MINHA.Monday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.MINHA.Tuesday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.MINHA.Wednesday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.MINHA.Thursday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.MINHA.Friday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.MINHA.Saturday.join(" ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="tg-0lax">arvit</td>
                        <td className="tg-0lax">
                          {item.ARVIT.Sunday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.ARVIT.Monday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.ARVIT.Tuesday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.ARVIT.Wednesday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.ARVIT.Thursday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.ARVIT.Friday.join(" ")}
                        </td>
                        <td className="tg-0lax">
                          {item.ARVIT.Saturday.join(" ")}
                        </td>
                      </tr>
                    </tbody>
                    <br></br>
                  </table>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

export default SynagogeCard;
