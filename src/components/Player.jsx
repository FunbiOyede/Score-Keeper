import React, { useState} from 'react'
import '../App.css'

//trying usestate for the first time

export default function Player(props) {
    let {name, id} = props;

  const [counter, setCounter] = useState(0)

  const increment = () =>{
      setCounter(counter+1);
  }
 
  const Decrement = () =>{
    setCounter(counter-1);
  }


  return (
    <div className='player' >
      {name}
      <p>{counter} point(s)</p>
      <button onClick={Decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <button onClick={props.DeletePlayer.bind(this,id)}>X</button>
    </div>
  )
}
