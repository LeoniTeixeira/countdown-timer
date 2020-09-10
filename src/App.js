import React, { useState }  from 'react';
import Header from './components/Header/Header';
import InputBox from './components/InputBox/InputBox';
import ListTimerItem from './components/ListTimerItem/ListTimerItem';

import { v4 as uuidv4 } from 'uuid';

function App() {
  if(localStorage.getItem('lsTimerList')==null){
    const tempList=[]
    localStorage.setItem('lsTimerList',JSON.stringify(tempList))
  }

  const [timerList, setTimerList] = useState(JSON.parse(localStorage.getItem('lsTimerList')))

  function handleAdd(description, date){
    const timer = {
      id:uuidv4(),
      description:description,
      date:date,
    }
    const tempList=JSON.parse(localStorage.getItem('lsTimerList'))
    tempList.push(timer)
    localStorage.setItem('lsTimerList',JSON.stringify(tempList)) 
    
    setTimerList(JSON.parse(localStorage.getItem('lsTimerList')))
  }

  function handleDelete(id) {
    const tempList=JSON.parse(localStorage.getItem('lsTimerList'))
    const filteredItems = tempList.filter(tarefa => tarefa.id !== id);
    localStorage.setItem('lsTimerList',JSON.stringify(filteredItems));
    
    setTimerList(JSON.parse(localStorage.getItem('lsTimerList')))
  }

  return (
    <>
      <Header/>
      <InputBox handleAdd={handleAdd} />
      <ListTimerItem list={timerList}
                     handleDelete={handleDelete}/>
    </>
  );
}

export default App;
