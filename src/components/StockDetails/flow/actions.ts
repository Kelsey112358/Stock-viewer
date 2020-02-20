import {
  RECEIVE_STOCK_DETAILS,
  REQUEST_STOCK_DETAILS,
  RECEIVE_CHART
} from "./actionTypes";

import { Dispatch } from "redux";

export const requestStockDetails = () => ({
  type: REQUEST_STOCK_DETAILS
});

export const receiveStockDetails = (json: JSON) => ({
  type: RECEIVE_STOCK_DETAILS,
  payload: json
});
export const receiveChart = (json: JSON) => ({
  type: RECEIVE_CHART,
  payload: json,
  receiveAt: Date.now()
});

export const fetchStockDetails = (symbol: String, range: string) => (
  dispatch: Dispatch
) => {
  dispatch(requestStockDetails());
  return fetch(
    "https://cloud.iexapis.com/stable/stock/" +
      symbol +
      "/batch?token=sk_75e757942e044e33aba43cbb07ba8e13&types=quote,news,company,chart&range=" +
      range +
      "&last=10"
  )
    .then(response => response.json())
    .then(json => dispatch(receiveStockDetails(json)));
};

export const fetchChart = (symbol: string, range: string) => (
  dispatch: Dispatch
) => {
  return fetch(
    "https://cloud.iexapis.com/stable/stock/" +
      symbol +
      "/batch?token=sk_75e757942e044e33aba43cbb07ba8e13&types=chart&range=" +
      range
  )
    .then(response => response.json())
    .then(json => dispatch(receiveChart(json)));
};
