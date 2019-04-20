import React from 'react'
import Player from './Player';
export default function Players(props) {
  let player = props.Players.map((p)=>{
      return <Player key={p.id} name={p.name} />
  })
  return (
    <div>
      {player}
    </div>
  )
}
