import './_app.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PokemonActions from '../../actions/pokemon';

import Sidebar from '../sidebar';

class App extends Component {
  componentWillMount() {
    const fetchPokemon = bindActionCreators(PokemonActions.fetchAll, this.props.dispatch);
    fetchPokemon();
  }

  render() {
    let {pokemon} = this.props;
    const setFocus = bindActionCreators(PokemonActions.focusPokemon, this.props.dispatch);
    
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Sidebar 
          pokemon={pokemon.list} 
          setFocus={setFocus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state,
})

export default connect(mapStateToProps)(App);
