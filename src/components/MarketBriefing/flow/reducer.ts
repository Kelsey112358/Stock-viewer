import {
  RECEIVE_MARKET_BRIEFING,
  REQUEST_MARKET_BRIEFING
} from "./actionTypes";
import { Action } from "src/types";
const initialState = {
  mostActive: {},
  isFetching: false
};

const MarketBriefingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_MARKET_BRIEFING:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_MARKET_BRIEFING:
      return {
        ...state,
        isFetching: false,
        mostActive: action.payload
      };
    default:
      return state;
  }
};

export default MarketBriefingReducer;
