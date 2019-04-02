import superagent from 'superagent';
import * as Pokemon from '../actiontypes/pokemon';

const API_URL = process.env.REACT_APP_POKE_API_URL;

export const fetchAll = () => (dispatch) => {
  return superagent.get(`${API_URL}pokemon/?limit=151`)
    .then(res => {
      return dispatch(fetch(res.body.results));
    })
    .catch(err => {
      console.log(err);
    })
};

export const fetchPokemon = (name) => (dispatch) => {
  return superagent.get(`${API_URL}pokemon/${name}`)
    .then(res => {
      return dispatch(setFocus(res.body));
    })
    .catch(err => {
      console.log('invalid pokemon name', err.message);
      return dispatch(invalidPokemon());
    })
};

const invalidPokemon = () => ({
  type: Pokemon.INVALID_NAME,
})

const setFocus = (pokemon) => ({
  type: Pokemon.SET_FOCUS,
  payload: pokemon,
})

const fetch = (pokemon) => ({
  type: Pokemon.FETCH_ALL,
  payload: pokemon,
})