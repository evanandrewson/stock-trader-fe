import { SET_EQUITY_AND_BUYING_POWER } from "../actions/homeActions";

const initialState = {
  equity: null,
  buying_power: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_EQUITY_AND_BUYING_POWER:
      return { ...state, ...action.payload, };
    default:
      return state;
  }
}
