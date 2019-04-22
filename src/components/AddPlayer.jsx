import React, { Component } from 'react';

class AddPlayer extends Component{
 
    state = {
        name: ''
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
            <form onSubmit={this.onSubmit} className='form'>
                <input value={this.state.name} type='text' onChange={this.getPlayerName} placeholder='Player name' className='input'/>
                <button onClick={this.addPlayer} className='button'>Add Player</button><br></br>
            </form>
             
        )
    }
}

export default AddPlayer