import React from 'react'
import { useState } from 'react';
import Input from '../Input/Input';

function AddInputBtn(props) {
    const [toggle, setToggle] = useState(false);

  return (
    <>
    <button onClick={() => setToggle((prev) => !prev)}>
    {!toggle ? "+" : "-"}
  </button>
  <br></br>
  
  {console.log(props.pieceOfState)}
  {toggle ? <Input pieceOfState={props.pieceOfState} setSynagogeObj={props.setSynagogeObj}/>:  ""}
  </>
  )
}

export default AddInputBtn