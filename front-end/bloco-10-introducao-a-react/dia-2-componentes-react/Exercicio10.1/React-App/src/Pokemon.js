import React, { Component } from 'react';
import './App.css';

class Pokemon extends Component {
    render() { 
        const { objPokemons } = this.props;
        return (
            <div className="pokedex">
                {objPokemons.map((pokemon) => 
                <div className="pokemon">
                    <img src={pokemon.image} className="image" alt={pokemon.name} />
                    <div>
                        <div>
                           <div>{`#${pokemon.id} ${pokemon.name}`}</div>
                           <div className="type">{pokemon.type}</div>
                           <div>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}
 
export default Pokemon;