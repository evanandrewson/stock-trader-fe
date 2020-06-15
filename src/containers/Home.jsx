import React, { useEffect } from 'react';
import EquityAndBuyingPower from '../components/home/EquityAndBuyingPower';
// import Portfolio from '../components/home/Portfolio';
// import History from '../components/home/History';
import { setEquityAndBuyingPower } from '../actions/homeActions';
import { useDispatch } from 'react-redux';


const Home = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEquityAndBuyingPower());
    })
    return (
        <div>
            <EquityAndBuyingPower />
            {/* <Portfolio />
            <History /> */}
        </div>
    );
}

export default Home;