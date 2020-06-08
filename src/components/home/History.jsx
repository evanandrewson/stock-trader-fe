import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
    const elements = history.map(item => {
        return <HistoryItem {...item} />
    })

    return (
        <div>
            {elements}
        </div>
    )
};

export default History;