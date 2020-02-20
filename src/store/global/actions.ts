import { DELETE_WATCH_LIST, ADD_WATCH_LIST } from './actionTypes';

export const addWatchList = (symbol: string) => ({
  type: ADD_WATCH_LIST,
  payload: symbol,
});

export const deleteWatchList = (symbol: string) => ({
  type: DELETE_WATCH_LIST,
  payload: symbol,
});
