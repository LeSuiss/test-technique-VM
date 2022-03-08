import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Timer from './components/Timer';
import { zone, timeZones, zoneConvertedTime } from './utils/timeZones';

function App() {
  const [timer, setTimer] = useState<string>('')
  const [alarm, setAlarm] = useState<string>('')
  const [selectedZones, setSelectedZones] = useState<{[key:string]: boolean}>({})

  useEffect(()=> {
    const socket=io(`http://127.0.0.1:5000`)
      
    socket.emit('timer', ()=>console.log('requesting timer from server'))
    socket.on("timer", (data: React.SetStateAction<string>) => setTimer(data));

    return () =>{
      socket.emit('disconnect', socket.close)
    } 

  }, []);
  
  useEffect(()=> {
    let result={}
    timeZones
      .filter(zone=>zone.value!==0) 
      .forEach(zone=> Object.assign(result, {[zone.location]:false} ))
    setSelectedZones(result)
  },[setSelectedZones])
  
  const otherZones:zone[] = timeZones

  return (
    <div className="App">
      
      <div>
        {timeZones
        .filter(zone=>zone.value===0)
        .map(zone=> <Timer timer={timer} zone={zone}/> )}

        <div className='buttonZoneContainer'>
          <h2>
            Add Zone Watcher
          </h2>
          {Object.keys(selectedZones).map(zoneName=>
            <button 
            className={selectedZones[zoneName]? 'selectedButtonZone buttonZone':'buttonZone'}
            onClick={()=>setSelectedZones(prevZone=>({...prevZone, [zoneName]:!prevZone[zoneName]}))}>{zoneName}
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