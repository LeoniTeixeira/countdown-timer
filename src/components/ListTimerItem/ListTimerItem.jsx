import React from 'react';
import TimerItem from '../TimerItem/TimerItem';

// import { Container } from './styles';

function ListTimerItem(props) {
  return (
    <ul>
      {props.list.map((timer) => <TimerItem key={timer.id} {...timer} 
                                            handleDelete={props.handleDelete}/>)}
      {console.log(props.list)}
    </ul>
  )
}

export default ListTimerItem;