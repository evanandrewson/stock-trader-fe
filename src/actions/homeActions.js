import { fetchEquityAndBuyingPower } from '../services/alpaca';
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