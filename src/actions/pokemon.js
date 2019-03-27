// import Pokedex from 'pokeapi-js-wrapper';
// const P = new Pokedex.Pokedex();

import superagent from 'superagent';
import * as Pokemon from '../actiontypes/pokemon';

const API_URL = process.env.REACT_APP_POKE_API_URL;
console.log(API_URL)
// const list = {
//   limit: 151,
//   offset: 0
// };

export const fetchAll = () => (dispatch) => {
  return superagent.get(`${API_URL}pokemon/?limit=151`)
    .then(res => {
      console.log(res)
      return dispatch(fetch(res.body.results));
    })
    .catch(err => {
      console.log(err);
    })
};

const fetch = (pokemon) => ({
  type: Pokemon.FETCH_ALL,
  payload: pokemon,
})