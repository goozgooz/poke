import './_app.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pokemon from '../../actions/pokemon';

class App extends Component {
  componentWillMount() {
    const fetchPokemon = bindActionCreators(pokemon.fetchAll, this.props.dispatch);
    fetchPokemon();
  }
  render() {
    return (
      <div className="App">
        <h1> Hi </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemon: state,
})

export default connect(mapStateToProps)(App);
