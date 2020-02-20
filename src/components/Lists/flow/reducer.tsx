import {
  RECEIVE_LISTS_GAINERS,
  RECEIVE_LISTS_LOSERS,
  RECEIVE_LISTS_IEXVOLUME,
  RECEIVE_LISTS_IEXPERCENT,
  REQUEST_LIST
} from "./actionTypes";
import { Action } from "src/types";
const initialState = {
  gainers: [],
  losers: [],
  iexVolume: [],
  iexPercent: [],
  isFetching: false
};

const ListsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_LIST:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_LISTS_GAINERS:
      return {
        ...state,
        isFetching: false,
        gainers: action.payload
      };
    case RECEIVE_LISTS_LOSERS:
      return {
        ...state,
        isFetching: false,
        losers: action.payload
      };
    case RECEIVE_LISTS_IEXVOLUME:
      return {
        ...state,
        isFetching: false,
        iexVolume: action.payload
      };
    case RECEIVE_LISTS_IEXPERCENT:
      return {
        ...state,
        isFetching: false,
        iexPercent: action.payload
      };
    default:
      return state;
  }
};

export default ListsReducer;
