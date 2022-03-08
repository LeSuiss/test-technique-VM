import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Alarm from './components/Alarm';
import Timer from './components/Timer';
import { zone, timeZones, zoneConvertedTime } from './utils/timeZones';

function App() {
  const [timer, setTimer] = useState<string>('')
  const [selectedZones, setSelectedZones] = useState<{[key:string]: boolean}>({})

  useEffect(function initializeSocketConnetion() {
    const socket=io(process.env.REACT_APP_BACKEND_URL??"")
      
    socket.emit('timer', ()=>console.log('requesting timer from server'))
    socket.on("timer", (data: React.SetStateAction<string>) => setTimer(data));

    return () =>{
      socket.emit('disconnect', socket.close)
    } 

  }, []);
  
  useEffect(function setButtonZone() {
    let result={}
    timeZones
      .filter(zone=>zone.value!==0) 
      .forEach(zone=> Object.assign(result, {[zone.location]:false} ))
    setSelectedZones(result)
  },[setSelectedZones])
  
  const otherZones:zone[] = timeZones

  return (
    <div className="App">
      <div className="header">
        <Alarm timer={timer} />
      
        {timeZones
        .filter(zone=>zone.value===0)
        .map(zone=> <Timer key={'main'+zone.label} timer={timer} zone={zone}/> )}

        <div className='buttonZoneContainer'>
          <h2>
            Add Zone Watcher
          </h2>
          {Object.keys(selectedZones).map(zoneName=>
            <button 
              key={'button'+zoneName}
              className={selectedZones[zoneName]? 'selectedButtonZone buttonZone':'buttonZone'}
              onClick={()=>setSelectedZones(prevZone=>({...prevZone, [zoneName]:!prevZone[zoneName]}))}
            >
              {zoneName}
            </button>)}
        </div>
      </div>

      <div>
        {
        otherZones
        .filter(zone=>selectedZones[zone.location])
        .map(zone=> <Timer key={zone.label} timer={timer} zone={zone}/> )}
      </div>
    </div>
  );
}

export default App;