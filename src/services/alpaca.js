const url = 'https://paper-api.alpaca.markets'

export const fetchEquityAndBuyingPower = () => {
  return fetch(`${url}/v2/account`, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA,
      'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_SECRET
    }
  })
    .then(res => res.json())
    .then(account => {
      return {
        equity: account.equity,
        buying_power: account.buying_power
      }
    });
}

export const fetchPositions = () => {
  return fetch(`${url}/v2/positions`, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA,
      'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_SECRET
    }
  })
    .then(res => res.json());
}

export const fetchOrders = () => {
  return fetch(`${url}/v2/orders`, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA,
      'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_SECRET
    }
  })
    .then(res => res.json());
}

export const makeOrder = data => {
  return fetch(`${url}/v2/orders`, {
    method: 'POST',
    headers: {
      'APCA-API-KEY-ID': process.env.REACT_APP_ALPACA,
      'APCA-API-SECRET-KEY': process.env.REACT_APP_ALPACA_SECRET,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => err.message);
}