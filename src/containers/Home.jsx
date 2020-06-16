import React, { useEffect } from 'react';
import EquityAndBuyingPower from '../components/home/EquityAndBuyingPower';
import Portfolio from '../components/home/Portfolio';
import History from '../components/home/History';
import { setEquityAndBuyingPower, setPositions } from '../actions/homeActions';
import { useDispatch, connect } from 'react-redux';
import { getEquity, getBuyingPower, getPositions, getOrders } from '../selectors/homeSelectors';


const Home = ({equity, buying_power, positions, orders}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEquityAndBuyingPower());
        dispatch(setPositions());
    }, []);

    return (
        <div>
            <EquityAndBuyingPower equity={equity} buyingPower={buying_power} />
            {/* <Portfolio positions={positions} />
            <History orders={orders} /> */}
        </div>
    );
}

const mapStateToProps = state => ({
    equity: getEquity(state),
    buying_power: getBuyingPower(state),
    positions: getPositions(state),
    orders: getOrders(state)
  });

  export default connect(
    mapStateToProps,
    null
  )(Home);