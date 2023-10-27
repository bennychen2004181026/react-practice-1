import React, { createContext, useReducer } from 'react'
import  AppReducer from './AppReducer'

const intitialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 2, text: 'Book', amount: -10 }
    ]
}
// Create context
export const GlobalContext = createContext(intitialState)


//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intitialState)
    //action
    function deleteTransaction(id) {
        dispatch(
            {
                type: 'DELETE_TRANSACTION',
                payload: id
            }
        )
    }

    function addTransaction(transaction) {
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: transaction
            }
        )
    }
    return (
        <GlobalContext.Provider value={{ 
            transactions:state.transactions, 
            deleteTransaction, 
            addTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}
