import {
  REQUEST_WATCH_LIST_DETAILS,
  RECEIVE_WATCH_LIST_DETAILS
} from "./actionTypes";
import { Dispatch } from "redux";

export const requestWatchListDetails = () => ({
  type: REQUEST_WATCH_LIST_DETAILS
});

export const receiveWatchListDetails = (json: JSON) => ({
  type: RECEIVE_WATCH_LIST_DETAILS,
  payload: json
});

export const fetchWatchListDetails = (symbols: String) => (
  dispatch: Dispatch
) => {
  dispatch(requestWatchListDetails());
  return fetch(
    "https://cloud.iexapis.com/stable/stock/market/batch?token=sk_75e757942e044e33aba43cbb07ba8e13&symbols=" +
      symbols +
      "&types=quote"
  )
    .then(response => response.json())
    .then(json => dispatch(receiveWatchListDetails(json)));
};
