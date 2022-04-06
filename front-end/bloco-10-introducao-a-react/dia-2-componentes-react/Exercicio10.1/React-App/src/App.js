import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Pokemons from './data'

class App extends Component {
    render() {
        return (
        <div>
          <Pokedex pokemonData={Pokemons} />
        </div>
        )
    }
}


export default App;