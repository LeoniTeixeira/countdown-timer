import React from 'react';

function TimerItem(props) {


  return (
    <div>
      <h4> Teste</h4> 
      <button type='submit' onClick={() => props.handleDelete(props.id)}>X</button>
    </div>
      
  )
}

export default TimerItem;