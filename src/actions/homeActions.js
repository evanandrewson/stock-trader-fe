import { fetchEquityAndBuyingPower, fetchPositions } from '../services/alpaca';

export const SET_EQUITY_AND_BUYING_POWER = 'SET_EQUITY_AND_BUYING_POWER';
export const setEquityAndBuyingPower = () => dispatch => {
  fetchEquityAndBuyingPower()
    .then(results => {
      dispatch({
        type: SET_EQUITY_AND_BUYING_POWER,
        payload: results
      })
    })
}

export const SET_POSITIONS = 'SET_POSITIONS';
export const setPositions = () => dispatch => {
  fetchPositions()
    .then(results => {
      dispatch({
        type: SET_POSITIONS,
        payload: results
      })
    })
}