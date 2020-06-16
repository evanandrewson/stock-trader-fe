import React, { useState } from 'react';
import { makeOrder } from '../../services/alpaca';

const OrderForm = () => {
    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [side, setSide] = useState('buy');
    const [type, setType] = useState('market');
    const [tif, setTif] = useState('day');
    const [limitPrice, setLimitPrice] = useState(0);
    const [stopPrice, setStopPrice] = useState(0);
    const [extendedHours, setExtendedHours] = useState('false')

    const handleChange = ({ target }) => {
        switch(target.name) {
            case 'symbol':
                setSymbol(target.value);
                break;
            case 'quantity':
                setQuantity(target.value);
                break;
            case 'side':
                setSide(target.value);
                break;
            case 'type':
                setType(target.value);
                break;
            case 'tif':
                setTif(target.value);
                break;
            case 'limitPrice':
                setLimitPrice(target.value);
                break;
            case 'stopPrice':
                setStopPrice(target.value);
                break;
            case 'extendedHours':
                setExtendedHours(target.value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            symbol,
            qty: quantity,
            side,
            type,
            time_in_force: tif
        }
        if(limitPrice) data.limit_price = limitPrice;
        if(stopPrice) data.stop_price = stopPrice;
        if(extendedHours) data.extended_hours = extendedHours;
        makeOrder(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Symbol:<input type='text' value={symbol} name='symbol' onChange={handleChange}></input>
            </label>
            <label>
                Quantity:<input type='number' step={1} value={quantity} name='quantity' onChange={handleChange}></input>
            </label>
            <label>
                Buy/Sell:<select value={side} name='side' onChange={handleChange}>
                    <option value='buy'>Buy</option>
                    <option value='sell'>Sell</option>
                </select>
            </label>
            <label>
                Type:<select value={type} name='type' onChange={handleChange}>
                    <option value='market'>Market</option>
                    <option value='limit'>Limit</option>
                    <option value='stop'>Stop</option>
                    <option value='stop_limit'>Stop Limit</option>
                </select>
            </label>
            <label>
                Time in force:<select value={tif} name='tif' onChange={handleChange}>
                    <option value='day'>day</option>
                    <option value='gtc'>gtc</option>
                    <option value='opg'>opg</option>
                    <option value='cls'>cls</option>
                    <option value='ioc'>ioc</option>
                    <option value='fok'>fok</option>
                </select>
            </label>
            {(type === 'limit' || type === 'stop_limit') && <label>
                Limit Price:<input type='number' step={.01} value={limitPrice} name='limitPrice' onChange={handleChange}></input>
            </label>}
            {(type === 'stop' || type === 'stop_limit') &&<label>
                Stop Price:<input type='number' step={.01} value={stopPrice} name='stopPrice' onChange={handleChange}></input>
            </label>}
            {type === 'limit' && tif === 'day' && <label>
                Extended Hours:<select value={extendedHours} name='extendedHours' onChange={handleChange}>
                    <option value='false'>false</option>
                    <option value='true'>true</option>
                </select>
            </label>}
            <button>Submit Order</button>
        </form>
    )
}

export default OrderForm;