import {
  REQUEST_WATCH_LIST_DETAILS,
  RECEIVE_WATCH_LIST_DETAILS
} from "./actionTypes";
import { Action } from "src/types";

const initialState = {
  myWatchListDetails: {},
  isFetching: false
};

const WatchListReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_WATCH_LIST_DETAILS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_WATCH_LIST_DETAILS:
      return {
        ...state,
        isFetching: false,
        myWatchListDetails: action.payload
      };
    default:
      return state;
  }
};

export default WatchListReducer;
