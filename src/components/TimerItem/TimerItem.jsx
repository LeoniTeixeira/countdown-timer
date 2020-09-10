import React from 'react';

function TimerItem(props) {
  return (
    <li>
      <h1> { props.description } { props.date }  </h1> 
      <button onClick={() => props.handleDelete(props.id)}>X</button>
    </li>
  )
}

export default TimerItem;