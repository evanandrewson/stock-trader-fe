import React from 'react';

const PortfolioItem = ({symbol, qty, current_price, unrealized_plpc}) => {
    return (
        <div>
            <p>{symbol}</p>
            <p>quantity: {qty}</p>
            <p>current price: {current_price}</p>
            <p>profit/loss: {unrealized_plpc}</p>
        </div>
    )
}

export default PortfolioItem;