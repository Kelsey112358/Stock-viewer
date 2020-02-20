import { RECEIVE_SYMBOLS, REQUEST_SYMBOLS } from "./actionTypes";
import { Action } from "src/types";
const initialState = {
  symbols: { bestMatches: [] },
  isFetching: false
};

const SearchBarReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_SYMBOLS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SYMBOLS:
      return {
        ...state,
        isFetching: false,
        symbols: action.payload
      };
    default:
      return state;
  }
};

export default SearchBarReducer;
