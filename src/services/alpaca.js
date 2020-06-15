const url = 'https://paper-api.alpaca.markets'

export const fetchEquityAndBuyingPower = () => {
  return fetch(`${url}/v2/account`, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': process.env.ALPACA,
      'APCA-API-SECRET-KEY': process.env.ALPACA_SECRET
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
