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
              console.log(props.cityToFetch);
              return (
                // <p>SHACHARIT : {item.SHACHARIT.Sunday.join(" ")}</p>

                <div>
                  {item.city == props.cityToFetch && (
                    <div>
                      <Link to={`/${item.id}`}>
                        <h2>{item.name}</h2>
                      </Link>
                      <h4>{item.city}</h4>
                      <h4>{item.adrees}</h4>
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
                            <td className="tg-0lax">Minha</td>
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
                            <td className="tg-0lax">Arvit</td>
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
                  )}
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
