import {
  RECEIVE_LISTS_GAINERS,
  RECEIVE_LISTS_LOSERS,
  RECEIVE_LISTS_IEXVOLUME,
  RECEIVE_LISTS_IEXPERCENT,
  REQUEST_LIST
} from "./actionTypes";

import { Dispatch } from "redux";
import { getUrl } from "src/utilities/getUrl";

export const requestList = () => ({
  type: REQUEST_LIST
});

export const receiveGainers = (json: JSON) => ({
  type: RECEIVE_LISTS_GAINERS,
  payload: json
});

export const receiveLosers = (json: JSON) => ({
  type: RECEIVE_LISTS_LOSERS,
  payload: json
});

export const receiveIEXVolume = (json: JSON) => ({
  type: RECEIVE_LISTS_IEXVOLUME,
  payload: json
});

export const receivIEXPercent = (json: JSON) => ({
  type: RECEIVE_LISTS_IEXPERCENT,
  payload: json
});

export const fetchGainers = () => (dispatch: Dispatch) => {
  dispatch(requestList());
  return fetch(getUrl("/stable/stock/market/list/gainers"))
    .then(response => response.json())
    .then(json => dispatch(receiveGainers(json)));
};
export const fetchLosers = () => (dispatch: Dispatch) => {
  dispatch(requestList());
  return fetch(getUrl("/stable/stock/market/list/losers"))
    .then(response => response.json())
    .then(json => dispatch(receiveLosers(json)));
};
export const fetchIEXVolume = () => (dispatch: Dispatch) => {
  dispatch(requestList());
  return fetch(getUrl("/stable/stock/market/list/iexvolume"))
    .then(response => response.json())
    .then(json => dispatch(receiveIEXVolume(json)));
};
export const fetchIEXPercent = () => (dispatch: Dispatch) => {
  dispatch(requestList());
  return fetch(getUrl("/stable/stock/market/list/iexpercent"))
    .then(response => response.json())
    .then(json => dispatch(receivIEXPercent(json)));
};
