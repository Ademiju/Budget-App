import React, {useState} from 'react'
import './Budget.css'
import BudgetBalance from './components/budget/budgetBalance'
import BudgetBody from './components/budget/BudgetBody'

const Budget = (props) => {
    const [balance, setBalance] = useState(1000)
    const [budget, setBudget] = useState([])
    const [currency, setCurrency] = useState("NGN")

  return (
    <div className='budget-container'>
        <BudgetBalance  setCurrency = {setCurrency} budget= {budget} setBudget = {setBudget} balance = {balance} setBalance = {setBalance}/>
        <BudgetBody currency = {currency} budget= {budget} setBudget = {setBudget} customerName = {props.customerName} balance={balance} setBalance={setBalance}/>
    </div>
  )
}

export default Budget