import React, { Component } from 'react';

class AddPlayer extends Component{
 
    state = {

    }
    
    getPlayerName = (e)=>{
        let id = Math.floor(Math.random() * 20);
        this.setState({
            id:id,
            name: e.target.value
        })
    }
    
    addPlayer = () =>{
       this.props.RenderPlayer(this.state)
       this.setState({
           name:''
       })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            name:''
        })
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input value={this.state.name} type='text' onChange={this.getPlayerName}/>
                <button onClick={this.addPlayer}>Add Player</button><br></br>
            </form>
             
        )
    }
}

export default AddPlayer