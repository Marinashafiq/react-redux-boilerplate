import * as types from '../types';

const snackbar = (state = {}, action) => {
    switch (action.type) {
      case types.SHOW_SNACKBAR:
        return {
          ...state,
          isOpen: true,
          message : action.message ,
          type : action.snacknarType
        };
      case types.HIDE_SNACKBAR:
        return {
          ...state,
          isOpen: false,
        };
      default:
        return state;
    }
  };

export default snackbar;