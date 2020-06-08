import React from 'react';

const HistoryItem = ({ symbol, qty, side, status}) => {
    return (
        <div>
            <p>{symbol}</p>
            <p>{side}</p>
            <p>quantity: {qty}</p>
            <p>{status}</p>
        </div>
    )
};

export default HistoryItem