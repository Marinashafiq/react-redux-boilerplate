import * as types from "../types/TypesExample";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_RECEIVE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
