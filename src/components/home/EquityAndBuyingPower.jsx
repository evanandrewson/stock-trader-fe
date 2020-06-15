import React from 'react';
import PropTypes from 'prop-types';

const EquityAndBuyingPower = ({ equity, buyingPower}) => {
    return (
        <div>
            <h2>Equity: {equity}</h2>
            <h3>Buying Power: {buyingPower}</h3>
        </div>
    )
};

EquityAndBuyingPower.propTypes = {
    equity: PropTypes.string,
    buyingPower: PropTypes.string
}

export default EquityAndBuyingPower;