import React, { useEffect } from 'react';
import EquityAndBuyingPower from '../components/home/EquityAndBuyingPower';
// import Portfolio from '../components/home/Portfolio';
// import History from '../components/home/History';
import { setEquityAndBuyingPower } from '../actions/homeActions';
import { useDispatch, connect } from 'react-redux';
import { getEquity, getBuyingPower } from '../selectors/homeSelectors';


const Home = ({equity, buying_power}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEquityAndBuyingPower());
    }, []);

    return (
        <div>
            <EquityAndBuyingPower equity={equity} buyingPower={buying_power} />
            {/* <Portfolio />
            <History /> */}
        </div>
    );
}

const mapStateToProps = state => ({
    equity: getEquity(state),
    buying_power: getBuyingPower(state)
  });

  export default connect(
    mapStateToProps,
    null
  )(Home);