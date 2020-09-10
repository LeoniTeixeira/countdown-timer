import React, { useState, useEffect } from 'react';
import './TimerItem.css'


function TimerItem(props) {
  function calculateTimeLeft()  {
    const difference = +new Date(props.date) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <li className='dp-flex'>
      <h1 className='mg-0'> { props.description } </h1>
      <h1 className='mg-0'> {timerComponents.length ? timerComponents : "Contador Finalizado!"} </h1> 
      <button className='btn-del' onClick={() => props.handleDelete(props.id)}>X</button>
    </li>
  )
}

export default TimerItem;