import React, { useState, useEffect } from 'react';

import './InputBox.css'


function InputBox(props) {
  const [date, setDate] = useState()
  const [description, setDescription] = useState()

  function newTimer(){
    props.handleAdd(description, date)
    setDate('')
    setDescription('')
  }

  function listenDescription(e) {
    setDescription(e.target.value)
    console.log(e.target.value)
  }

  function listenDate(e) {
    setDate(e.target.value)
    console.log(e.target.value)
  }

  // useEffect(() => {date;}, [date])

  return (
    <>
      <div className='container'>
        <label htmlFor='date-name'>Decrição</label>
        <input onChange={listenDescription} value={description} className='input-text' type="text" id='date-name'/>
          <br/>
        <label htmlFor='date'>Data</label>
        <div className='row'>
          <input onChange={listenDate} value={date} className='input-date' type="date" id='date'/>
          <button type='submit' onClick={newTimer} className='add-btn'>Add</button>
        </div>
      </div>
    </>
  )
}
export default InputBox;