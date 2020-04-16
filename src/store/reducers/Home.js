import * as types from "../types/Home";

const INITIAL_STATE = {
  vacancies:[],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ALL_VACANCIES_RECIEVE:
      return {
        ...state,
        vacancies: action.payload,
      };
    default:
      return state;
  }
};
