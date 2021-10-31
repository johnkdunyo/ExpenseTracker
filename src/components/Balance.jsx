import React from 'react'
import { Fragment } from 'react';
import { useContext } from 'react/cjs/react.development';

import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    

    return (
        <Fragment>
            <h4>Your Balance</h4>
            <h1>GH{total}</h1>
        </Fragment>
    )
}

export default Balance
