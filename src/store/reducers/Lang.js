
import * as types from '../types';

const INITIAL_STATE = {
  lang: localStorage.getItem('lang') || 'en'
};

export default function locale(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CURRENT_LANG:
      return { ...state, lang: action.lang };
    case types.GET_CURRENT_LANG:
      return state;
    default:
      return state;
  }
};