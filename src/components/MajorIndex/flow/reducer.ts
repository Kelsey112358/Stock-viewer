import { RECEIVE_MAJOR_INDEX, REQUEST_MAJOR_INDEX } from "./actionTypes";
import { Action } from "src/types";

const initialState = {
  majorIndex: {},
  isFetching: false
};

const MajorIndexReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_MAJOR_INDEX:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_MAJOR_INDEX:
      return {
        ...state,
        isFetching: false,
        majorIndex: action.payload
      };
    default:
      return state;
  }
};

export default MajorIndexReducer;
