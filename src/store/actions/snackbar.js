import * as types from '../types';

export const showSnackbarAction = (message , snacknarType) => {
  return {
  type: types.SHOW_SNACKBAR, 
  message ,
  snacknarType  
  };
};

export const clearSnackbar = () => {
  return {
   type: types.HIDE_SNACKBAR 
  };
};