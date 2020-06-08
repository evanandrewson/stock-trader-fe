import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const EquityAndBuyingPower = ({ equity, buyingPower}) => {
    return (
        <div>
            <h2>Equity: {equity}</h2>
            <h3>Buying Power: {buyingPower}</h3>
        </div>
    )
};

const mapStateToProps = state => ({
    // equity: getEquity(),
    // buyingPower: getBuyingPower()
    equity: 100000,
    buyingPower: 400000
});

EquityAndBuyingPower.propTypes = {
    equity: PropTypes.string,
    buyingPower: PropTypes.string
}

export default connect(
    mapStateToProps,
    null
    )(EquityAndBuyingPower);