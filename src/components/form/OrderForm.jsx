import React, { useState } from 'react';

const OrderForm = () => {
    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [side, setSide] = useState('');
    const [type, setType] = useState('');
    const [tif, setTif] = useState('');
    const [limitPrice, setLimitPrice] = useState(0);
    const [stopPrice, setStopPrice] = useState(0);
    const [extendedHours, setExtendedHours] = useState('')

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

    return (
        <form>
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
            <label>
                Limit Price:<input type='number' step={.01} value={limitPrice} name='limitPrice' onChange={handleChange}></input>
            </label>
            <label>
                Stop Price:<input type='number' step={.01} value={stopPrice} name='stopPrice' onChange={handleChange}></input>
            </label>
            <label>
                Extended Hours:<select value={extendedHours} name='extendedHours' onChange={handleChange}>
                    <option value='true'>true</option>
                    <option value='false'>false</option>
                </select>
            </label>
        </form>
    )
}

export default OrderForm;