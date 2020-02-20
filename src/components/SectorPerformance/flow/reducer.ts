import {
  REQUEST_SECTOR_PERFORMANCE,
  RECEIVE_SECTOR_PERFORMANCE
} from "./actionTypes";
import { Action } from "src/types/index";

const initialState = {
  isFetching: false,
  sectorPerformance: []
};

const SectorPerformanceReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case REQUEST_SECTOR_PERFORMANCE:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SECTOR_PERFORMANCE:
      return {
        ...state,
        sectorPerformance: action.payload.sectorPerformance
      };
    default:
      return state;
  }
};

export default SectorPerformanceReducer;
