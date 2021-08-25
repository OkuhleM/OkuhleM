
import React, { useState, useRef, useEffect } from 'react';
function App() {


const intervalRef =useRef(null);
const [timer, setTimer] = useState('00:00:00');
function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60);
  const minutes = Math.floor( (total/1000/60) % 60);
  const hours = Math.floor( (total/1000*60*60)%24);
  const days = Math.floor( total/ (1000*60*60*24));
  return {
    total, days, hours, minutes, seconds
  };
}

function startTimer(deadline){

  let {total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
  if(total>=0){
    setTimer(
      (hours > 9 ? hours : '0'+hours) + ':' +
      (minutes > 9 ? minutes : '0'+minutes) + ':' +
      (seconds > 9 ? seconds : '0'+seconds) 
        )
  }else{
    clearInterval(intervalRef.current);
  }
}

function clearTimer(endtime){
  setTimer('00:00:10');

  if(intervalRef.current) clearInterval(intervalRef.current);
  const id = setInterval(()=>{
   startTimer(endtime);
  }, 1000)
  intervalRef.current = id;
}
function getDeadlineTime(){
  let deadline = new Date();
  deadline.setSeconds(deadline.getSeconds()+10);
  return deadline;
}

useEffect(()=>{
  clearTimer(getDeadlineTime());
  return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
},[]);

function onClickResetBtn(){
  if(intervalRef.current) clearInterval(intervalRef.current);
  clearTimer(getDeadlineTime());
}
  return (
    <div style={divStyle}>
   <h1 style={Header}> {timer} </h1>
    <button onClick={onClickResetBtn}>Reset</button>
    </div>
  );
}

const divStyle = {
  color: 'black',
  backgroundcolor: 'black'

};

const Header = {
  textAlign: "center",  
  padding: "100px 30px",
}

export default App;
