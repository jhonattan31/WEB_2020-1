import React, { Component } from 'react';
import './App.css';
import Navigate from './components/Navigate'
import Average from './components/PokemonFront'
import Random from './components/PokemonBack'
import Sum from './components/PookemonInfo'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {id:1}
  }

  render() {
    return (
      <div className='container'>
        <h1>Exercício React-Redux Simples</h1>
        <div className='line'>
          <Navigate id={this.state.id}/>
        </div>
        <div className='line'>
          <Average id={this.state.id}/>
          <Random id={this.state.id}/>
          <Sum id={this.state.id}/>
        </div>
      </div>
    );
  }
}

export default App;
