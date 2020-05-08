import * as types from "../types";

const INITIAL_STATE = localStorage.getItem("lang") || "en";

export default function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_LANG:
      return action.payload;
    case types.GET_LANG:
      return action.payload;
    default:
      return state;
  }
}
