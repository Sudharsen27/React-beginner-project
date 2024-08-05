import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [ running, setRunning]= useState(false);

  useEffect(()=>{
    let intervel;
    if (running) {
      intervel = setInterval(()=>{
        setTime ((prevTime)=> prevTime + 10);
      }, 10);
    }else if (! running){
      clearInterval(intervel);
    }
    return () => clearInterval(intervel);
  }, [running]);

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', }}>
    <h1 className="text-8xl font-bold ">Stop Watch</h1>
</div>

    <div style={{display: 'flex', justifyContent: 'center'}} >
      <span>{("0"+ Math.floor((time /60000)%60))}:</span>
      <span>{("0"+Math.floor((time / 1000)%60))}:</span>
      <span>{("0"+((time / 10)% 100))}</span>
    </div>
    <br></br>
    <div style={{display: 'flex', justifyContent: 'center'}}>
  <button style={{marginRight: '10px'}} onClick={() => setRunning(true)}>Start</button>
  <button style={{marginRight: '10px'}} onClick={() => setRunning(false)}>Stop</button>
  <button onClick={() => setTime(0)}>Reset</button>
</div>
    </>
  );
}

export default App;
