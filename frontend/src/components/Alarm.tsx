import React, { ChangeEvent, useEffect, useState } from 'react'
import { EventEmitter } from 'stream';
import { json } from 'stream/consumers';

const Alarm=({timer}:{timer:string})=> {

const [hour, setHour] = useState<number>(0)
const [min, setMin] = useState<number>(0)

useEffect(() => {
//handle single digit for min
  if (timer === `${hour}:${min>=10? min : `0${min}`}:00`){
    alert('ALARM')
  }
}, [timer, hour, min]);

const incrementMin = ()=>setMin((prev:number)=> prev === 60 ? 0 : prev+1)
const decrementMin = ()=>setMin((prev:number)=> prev === 0 ? 60 : prev-1)

const incrementHour = ()=>setHour((prev:number)=> prev=== 24 ? 0 : prev+1)
const decrementHour = ()=>setHour((prev:number)=> prev=== 0 ? 24 : prev-1)

  const checkIfIsOnlyNum = /^[+-]?\d*(?:[.,]\d*)?$/;
  const handleChange = (e: ChangeEvent, setter:Function, max:number) => {
    const target = e.target as HTMLTextAreaElement;
    const isOnlyNum = checkIfIsOnlyNum.test(target.value)
    const result = target.value ===''? 0: parseFloat(target.value) ??0
   
    if (isOnlyNum){
      const correctedNum = result > max ? max: result
      setter(correctedNum);
    }
    
 }

  return (
    <div className='Alarm'>
      <h2>ALARM</h2>
      <button onClick={incrementHour}> + </button>
        <input value={hour} onChange={(e)=>handleChange(e,setHour, 24)}/>
      <button onClick={decrementHour}> - </button>
      
      <span>:</span>
      
      <button onClick={incrementMin}> + </button>
        <input value={min>=10? min : `0${min}`} onChange={(e)=>handleChange(e,setMin, 60)}/>
      <button onClick={decrementMin}> - </button>
    </div>
  )
}

export default Alarm
