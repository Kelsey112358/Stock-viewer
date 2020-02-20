import {
  RECEIVE_MARKET_BRIEFING,
  REQUEST_MARKET_BRIEFING
} from "./actionTypes";
import { Dispatch } from "redux";

export const requestMarketBriefing = () => ({
  type: REQUEST_MARKET_BRIEFING
});

export const receiveMarketBriefing = (json: JSON) => ({
  type: RECEIVE_MARKET_BRIEFING,
  payload: json
});

export const fetchMostActive = () => (dispatch: Dispatch) => {
  dispatch(requestMarketBriefing());
  return fetch("https://financialmodelingprep.com/api/v3/stock/actives")
    .then(response => response.json())
    .then(json => dispatch(receiveMarketBriefing(json)));
};
