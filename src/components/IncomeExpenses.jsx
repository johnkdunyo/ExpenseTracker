import React from 'react'
import { Fragment, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item> 0)
        .reduce((acc, item)=> (acc += item), 0)
        .toFixed(2);
    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item)=> (acc += item * -1), 0) 
        .toFixed(2);
        
    
   
    

    return (
        <Fragment>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p  className="money plus">GHC {income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">GHC {expense}</p>
                </div>
            </div>
            
        </Fragment>
    )
}

export default IncomeExpenses
