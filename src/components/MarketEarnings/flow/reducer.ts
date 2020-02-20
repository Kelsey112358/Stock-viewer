import {
  RECEIVE_MARKET_EARNINGS,
  REQUEST_MARKET_EARNINGS
} from "./actionTypes";
import { Action } from "src/types";
const initialState = {
  marketEarnings: [],
  isFetching: false
};

const MarketEarningsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_MARKET_EARNINGS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_MARKET_EARNINGS:
      return {
        ...state,
        isFetching: false,
        marketEarnings: action.payload
      };
    default:
      return state;
  }
};

export default MarketEarningsReducer;
