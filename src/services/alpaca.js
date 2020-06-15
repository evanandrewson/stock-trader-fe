const url = 'paper-api.alpaca.markets'

export const getEquityAndBuyingPower = () => {
  fetch(`${url}/v2/account`, {
    method: 'GET',
    headers: {
      ['APCA-API-KEY-ID']: process.env.ALPACA,
      ['APCA-API-SECRET-KEY']: process.env.ALPACA_SECRET
    }
  })
    .then(res => res.json())
    .then(account => ({
      equity: account.equity,
      buying_power: account.buying_power
    }));
}