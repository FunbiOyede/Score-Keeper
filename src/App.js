import React, { Component } from 'react'
import Header from './components/Header'
import AddPlayer from './components/AddPlayer';
import Players from './components/Players';
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


   DeletePlayer = (playerID) =>{

    this.setState({
      Players:[...this.state.Players.filter(player => player.id !== playerID)]
    })

  }


  render() {
    
    return (
      <div className='App'>
        <Header />     
        <AddPlayer RenderPlayer={this.RenderPlayer}  />
        <Players Players={this.state.Players} DeletePlayer={this.DeletePlayer} />
      </div>
    )
  }
}

export default App
