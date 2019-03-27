import './_app.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pokemon from '../../actions/pokemon';

import Sidebar from '../sidebar';

class App extends Component {
  componentWillMount() {
    const fetchPokemon = bindActionCreators(pokemon.fetchAll, this.props.dispatch);
    fetchPokemon();
  }

  render() {
    let {pokemon} = this.props;
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Sidebar pokemon={pokemon} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state,
})

export default connect(mapStateToProps)(App);
