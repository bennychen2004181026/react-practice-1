import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const [money, setMoney] = useState({
        income: 0,
        expense: 0
    })
    useEffect(() => {
        const amounts = transactions.map((transaction) => transaction.amount)

        const income = amounts.filter((amount) => amount > 0).reduce((acc, amount) => acc + amount, 0).toFixed(2)

        const expense = (amounts.filter((amount) => amount < 0).reduce((acc, amount) => acc + amount, 0) * -1).toFixed(2)
 
        setMoney({
            income,
            expense
        })
    }, [transactions])

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id='money-plus' className="money plus">${money.income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-minus' className="money minus">${money.expense}</p>
            </div>
        </div>
    )
}