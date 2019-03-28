import * as pokemon from '../actiontypes/pokemon';
const initialState = {
  activePokemon: null,
  list: []
};

export default function PokemonReducer(state = initialState, action) {
  let {type, payload} = action;
  
  switch(type) {
    case pokemon.FETCH_ALL:
      let newList = {
        list: [...state.list, ...payload]
      };
      return {...state, ...newList};
      
    case pokemon.SET_FOCUS:
      return {
        ...state, 
        activePokemon: payload
      };
    
    default: 
      return state;
  }
}