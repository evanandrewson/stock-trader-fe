import { SET_EQUITY_AND_BUYING_POWER, SET_POSITIONS } from "../actions/homeActions";

const initialState = {
  equity: null,
  buying_power: null,
  positions: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_EQUITY_AND_BUYING_POWER:
      return { ...state, ...action.payload, };
    case SET_POSITIONS:
      return { ...state, positions: action.payload}
    default:
      return state;
  }
}
