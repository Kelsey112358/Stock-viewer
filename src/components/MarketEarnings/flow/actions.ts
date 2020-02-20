import {
  RECEIVE_MARKET_EARNINGS,
  REQUEST_MARKET_EARNINGS
} from "./actionTypes";
import { Dispatch } from "redux";
//import { getUrl } from "src/utilities/getUrl";

export const requestMarketEarnings = () => ({
  type: REQUEST_MARKET_EARNINGS
});

export const receiveMarketEarnings = (json: JSON) => ({
  type: RECEIVE_MARKET_EARNINGS,
  payload: json
});

export const fetchMarketEarnings = () => (dispatch: Dispatch) => {
  dispatch(requestMarketEarnings());
  return fetch(
    "https://www.alphavantage.co/query?function=SECTOR&apikey=WCZYISL9V2MRWE92"
  )
    .then(response => response.json())
    .then(json => dispatch(receiveMarketEarnings(json)));
};
