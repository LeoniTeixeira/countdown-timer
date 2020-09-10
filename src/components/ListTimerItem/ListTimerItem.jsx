import React from 'react';
import TimerItem from '../TimerItem/TimerItem';

import './ListTimerItem.css'

function ListTimerItem(props) {
  return (
    <ul className='list-style'>
      {props.list.map((timer) => <TimerItem key={timer.id} {...timer} 
                                            handleDelete={props.handleDelete}/>)}
      {console.log(props.list)}
    </ul>
  )
}

export default ListTimerItem;