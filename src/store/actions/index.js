import * as types from "../types";

export const action = data => ({
  type: types.FETCH_DATA,
  payload: data
});