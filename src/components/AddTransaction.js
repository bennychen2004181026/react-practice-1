import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const formDataState = {
        text: '',
        amount: 0
    }
    const [formData, setFormData] = useState(formDataState)

    const handleInputChange = (e) => {
        console.log(typeof e.target)
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text:formData.text,
            //turn the string type of formData.amount into inter Number
            amount: Number(formData.amount)
        }
        addTransaction(newTransaction)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Enter text..."
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="1"
                    />
                </div>
                <button 
                className="btn"
                type="submit"
                >Add transaction</button>
            </form>
        </div>
    )
}