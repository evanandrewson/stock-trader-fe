import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ orders }) => {
    const elements = orders.map(item => {
        return <HistoryItem {...item} key={item.symbol} />
    })

    return (
        <div>
            {elements}
        </div>
    )
};

export default History;