import React from 'react';
import PortfolioItem from './PortfolioItem';

//todo: make API call to get open position

const getOpenPosition = () => {};

const Portfolio = ({symbols}) => {
    const elements = symbols.map(symbol => {
        return <PortfolioItem {...getOpenPosition(symbol)} />
    })
    return (
        <div>
            {elements}
        </div>
    )
};

export default Portfolio;