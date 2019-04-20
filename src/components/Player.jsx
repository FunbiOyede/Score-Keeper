import React from 'react'
import '../App.css'
export default function Player(props) {
    let {name} = props
  return (
    <div className='player' >
      {name}
    </div>
  )
}
