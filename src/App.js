import React, { useState }  from 'react';
import Header from './components/Header/Header';
import InputBox from './components/InputBox/InputBox';
import ListTimerItem from './components/ListTimerItem/ListTimerItem';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [list, setList] = useState({})
  
  function handleAdd(description, date){
    const timer = {
      id:uuidv4(),
      description:description,
      date:date,
    }
    if(localStorage.getItem('list')==null){
      const list=[]
      list.push(timer);
      localStorage.setItem('list',JSON.stringify(list))
    }
    else{
      const list=JSON.parse(localStorage.getItem('list'))
      list.push(timer)
      localStorage.setItem('list',JSON.stringify(list)) 
    }
    setList({list:JSON.parse(localStorage.getItem('list'))})
  }



  return (
    <>
      <Header/>
      <InputBox handleAdd={handleAdd} />
      <ListTimerItem list={list}/>
    </>
  );
}

export default App;
