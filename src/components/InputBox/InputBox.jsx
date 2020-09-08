import React from 'react';

import './InputBox.css'
function InputBox() {
  return (
    <>
        <div className='container'>
            <label htmlFor='date-name'>Decrição</label>
            <input className='input-text' type="text" id='date-name'/>
            <br/>
            <label htmlFor='date'>Data</label>
            <div className='row'>
                <input className='input-date' type="date" id='date'/>
                <button className='add-btn'>Add</button>
            </div>
        </div>
    </>
  )
}
export default InputBox;