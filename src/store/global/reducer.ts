import { Action } from 'src/types';
import { DELETE_WATCH_LIST, ADD_WATCH_LIST } from './actionTypes';

const initialState = {
  myWatchList: ['AAPL', 'FB', 'A'],
};
const delFromWatchList = (myWatchList: Array<string>, target: string) => {
  var result = [];
  for (var i = 0; i < myWatchList.length; i++) {
    if (myWatchList[i] !== target) {
      result.push(myWatchList[i]);
    }
  }
  return result;
};
const globalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_WATCH_LIST:
      return {
        ...state,
        myWatchList: state.myWatchList.concat(action.payload),
      };
    case DELETE_WATCH_LIST:
      return {
        ...state,
        myWatchList: delFromWatchList(state.myWatchList, action.payload),
      };
    default:
      return state;
  }
};

export default globalReducer;
