import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon'
import './App.css';



class Pokedex extends Component {
    render() {
        const { pokemonData } = this.props
        return (
            <>
                <h1 className='center'>Pokedex</h1>
                <div className="pokedex">
                    {pokemonData.map((pokemon) => <Pokemon key={pokemon.name} objPokemons={pokemon} />)}
                </div>
            </>
        );
    }
}

Pokedex.propTypes = {
    pokemonData: PropTypes.array.isRequired,
};

export default Pokedex;
