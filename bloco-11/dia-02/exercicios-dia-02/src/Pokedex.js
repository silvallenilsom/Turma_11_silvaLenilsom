import { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { Pokemons } = this.props;
    return (
      <div>
        { Pokemons.map( (pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    );
  }
}

export default Pokedex;
