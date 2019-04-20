import React, { Component } from 'react'
import Header from './components/Header'
import AddPlayer from './components/AddPlayer';
import PlayersCon from './components/PlayersCon';
import './App.css'

export class App extends Component {
  state = {
    Players:[]
  }

  RenderPlayer = (player) =>{
    let newPlayer = {
      id:player.id,
      name:player.name
    }
    this.setState({
      Players:[...this.state.Players,newPlayer]
    })
  }
  
  render() {
    return (
      <div className='App'>
        <Header />     
        <AddPlayer RenderPlayer={this.RenderPlayer} />
        <PlayersCon Players={this.state.Players} />
      </div>
    )
  }
}

export default App
