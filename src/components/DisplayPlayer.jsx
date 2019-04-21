import React, { useState} from 'react'
import '../App.css'

//trying the usestate feature  for the first time

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
    <div className='wrapper' >
      <h4 className='player'>{name}</h4><br/>
      <p className='counter'>{counter} point(s)</p>
       <div className='player_actions'>
          <button onClick={Decrement} className='btn'>-1</button>
          <button onClick={increment} className='btn'>+1</button>
          <button onClick={props.DeletePlayer.bind(this,id)} className='btn'>X</button>
       </div>
    </div>
  )
}
