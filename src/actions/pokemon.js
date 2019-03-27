import superagent from 'superagent';
import * as Pokemon from '../actiontypes/pokemon';

const API_URL = process.env.REACT_APP_POKE_API_URL;

export const fetchAll = () => (dispatch) => {
  return superagent.get(`${API_URL}pokemon?limit=151`)
    .then(res => {
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