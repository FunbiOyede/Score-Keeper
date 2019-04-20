import React from 'react'
import Player from './Player';

export default function Players(props) {
  
  let player = props.Players.map((p)=>{
    
    return <Player key={p.id} name={p.name} id={p.id} DeletePlayer={props.DeletePlayer} />
  })

  return (

    <div>

      {player}

    </div>
  )
}
