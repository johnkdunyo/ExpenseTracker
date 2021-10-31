import React from 'react'
import { Fragment, useContext } from 'react'
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState'

function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    //console.log(context)

    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                
            </ul>
            
        </Fragment>
    )
}

export default TransactionList
