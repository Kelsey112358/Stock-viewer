import { RECEIVE_MAJOR_INDEX, REQUEST_MAJOR_INDEX } from "./actionTypes";
import { Dispatch } from "redux";

export const requestMajorIndex = () => ({
  type: REQUEST_MAJOR_INDEX
});

export const receiveMajorIndex = (json: JSON) => ({
  type: RECEIVE_MAJOR_INDEX,
  payload: json
});

export const fetchMajorIndex = () => (dispatch: Dispatch) => {
  dispatch(requestMajorIndex());
  return fetch("https://financialmodelingprep.com/api/v3/majors-indexes")
    .then(response => response.json())
    .then(json => dispatch(receiveMajorIndex(json)));
};
