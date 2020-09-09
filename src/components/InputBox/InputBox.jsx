import React, { useState } from 'react';

import './InputBox.css'


function InputBox(props) {
  const [date, setDate] = useState()
  const [description, setDescription] = useState()

  function newTimer(){
    props.handleAdd(description, date)
  }

  function listenDescription(e) {
    setDescription(e.target.value)
    console.log(e.target.value)
  }

  function listenDate(e) {
    setDate(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <div className='container'>
        <label htmlFor='date-name'>Decrição</label>
        <input onChange={listenDescription} className='input-text' type="text" id='date-name'/>
          <br/>
        <label htmlFor='date'>Data</label>
        <div className='row'>
          <input onChange={listenDate} className='input-date' type="date" id='date'/>
          <button onClick={newTimer} className='add-btn'>Add</button>
        </div>
      </div>
    </>
  )
}
export default InputBox;