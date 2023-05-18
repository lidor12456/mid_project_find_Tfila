import React from 'react'
import { useState,useRef } from 'react'

function Input({pieceOfState,setSynagogeObj}) {
    const [tfilaTimes,setTfilaTimes] = useState([]);
    const TimeInputRef = useRef()

    
  return (
    <>
    <input
    
    type="time"
    ref={TimeInputRef}
    onChange={()=>{
        setSynagogeObj((prev)=>{
             pieceOfState.push(TimeInputRef.current?.value);
            return prev;
        })

    }}
    
    />

    </>
  )
}

export default Input