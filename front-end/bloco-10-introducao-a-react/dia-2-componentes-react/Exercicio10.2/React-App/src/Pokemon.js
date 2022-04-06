import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Pokemon extends Component {
    render() { 
        const { objPokemons } = this.props;
        const { image, name, id, type, averageWeight } = objPokemons;
        const { value, measurementUnit } = averageWeight
        return (
            <div>
                <div className="pokemon">
                    <img src={image} className="image" alt={name} />
                    <div>
                        <div>
                           <div>{`#${id} ${name}`}</div>
                           <div className="type">{type}</div>
                           <div>{`Weight: ${value} ${measurementUnit}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemonData: PropTypes.object,
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
};
 
export default Pokemon;