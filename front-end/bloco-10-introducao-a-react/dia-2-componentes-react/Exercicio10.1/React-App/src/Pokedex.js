import React, { Component } from 'react';
import Pokemon from './Pokemon'



class Pokedex extends Component {
    render() {
        const { pokemonData } = this.props
        return (
            <>
                <h1 className='center'>Pokedex</h1>
                <Pokemon objPokemons={pokemonData} />
            </>
        );
    }
}
 
export default Pokedex;
