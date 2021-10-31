import React from 'react'
import { Fragment, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function Transaction({ transaction }) {

    const { deleteTransaction } = useContext( GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const class_name = sign === '-' ? 'minus' : 'plus'

    return (
        <Fragment>
            <li className={`${class_name}`}>
                    {transaction.text} 
                    <span> {sign} GHC {Math.abs(transaction.amount)}</span>
                    <button 
                        className="delete-btn"
                        onClick={()=> deleteTransaction(transaction.id)}
                    >
                        x
                    </button>
            </li>
        </Fragment>
    )
}

export default Transaction
