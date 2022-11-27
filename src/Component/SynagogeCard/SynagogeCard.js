import React, { useEffect, useState } from "react";

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
            {(structureData = Object.entries(props.synagoeDetails.data[0]))}
            {
              (structureData = JSON.stringify(structureData).replace(
                /[^a-zA-Z0-9]/g,
                " "
              ))
            }
            {console.log(structureData)}
            {structureData.map((item, i) => {
              // console.log(item);
              if (i > 2) {
                let objToString = JSON.stringify(item);
                // console.log(objToString);
                return (
                  <div>
                    <p>{objToString.replace(/[^a-zA-Z0-9]/g, " ")}</p>
                  </div>
                );
              } else {
                return <p>{item.join(" ")}</p>;
              }
            })}
            <p></p>
          </div>
        )
      )}
    </div>
  );
}

export default SynagogeCard;
