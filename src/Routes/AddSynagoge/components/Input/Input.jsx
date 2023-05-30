import React from 'react'
import { useState,useRef } from 'react'

function Input({pieceOfState,setSynagogeObj,isFirstPosition}) {
    const [tfilaTimes,setTfilaTimes] = useState([]);
    const TimeInputRef = useRef()

    
  return (
    <>
    <input
    defaultValue={isFirstPosition? pieceOfState[0] :pieceOfState[1] }
    type="time"
    ref={TimeInputRef}
    onChange={()=>{
        setSynagogeObj((prev)=>{
            isFirstPosition? pieceOfState[0]=TimeInputRef.current?.value : pieceOfState[1]=TimeInputRef.current?.value; 
            return prev;
        })

    }}
    
    />

    </>
  )
}

export default Input