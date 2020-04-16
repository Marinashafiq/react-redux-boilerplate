import * as types from '../types/Loader';

export const loader = (bool)=>{
    return bool ? {
      type: types.SHOW_LOADER,
      data:bool
    }: {
      type: types.HIDE_LOADER,
      data: bool
    }
}