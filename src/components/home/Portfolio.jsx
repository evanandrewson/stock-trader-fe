import React from 'react';
import PortfolioItem from './PortfolioItem';


const Portfolio = ({positions}) => {
    const elements = positions.map(position => {
        return <PortfolioItem {...position} key={position.symbol} />
    })
    return (
        <div>
            {elements}
        </div>
    )
};

export default Portfolio;