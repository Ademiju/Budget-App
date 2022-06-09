import React, {useState} from 'react'
import {toDatetimeLocal} from '../../util'
import './budgetBody.css'
import {useHistory} from "react-router-dom";
import Budget from "../../Budget";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBudgetAction } from '../../redux/actions/budget';


const BudgetDetails = (props) => {
    let {budget, setBudget, balance,setBalance, currency} = props

    const {budgetState} = useSelector((state) => state.budgetReducer)
    const dispatch = useDispatch()
    const [input, setInput]  = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const filterTable = () => {
        let newObject = [...budget]
        setBudget(newObject.filter((data) => input === data["budgetDescription"] || input === data["budgetName"]))
    }


   const deleteEntry = (objectId, budgetAmount) => {
     let newObject = [...budget]
     setBudget(newObject.filter((data, index) => index !== objectId ))

     dispatch(deleteBudgetAction(objectId))

     let updateBalance = balance + budgetAmount
     setBalance(updateBalance)
   }
  return (
    <div className='budget-details-container'>
        <div>
            <h1>Details</h1>
            <div>
                <label>Search For:</label>
                <input onChange={handleInput}/>
                <button onClick = {filterTable}> Search </button>
            </div>
        </div>
        <h1>Details</h1>
        {budgetState.length > 0 
        ? 
        <table>
            <tr className='table-header'>
                <th>Date</th>
                <th>Budget Name</th>
                <th>Amount</th>
                <th>Description</th>
            </tr>

            {budgetState.map((data, index) =>
            <tr key = {index} className = "data-row">
                <td>{toDatetimeLocal(data.date)}</td>
                <td>{data.budgetName}</td>
                <td>{ currency }{data.budgetAmount}</td>
                <td>{data.budgetDescription}</td>
                <td>
                  <button onClick = {() => deleteEntry(index, +data.budgetAmount)} style = {{backgroundColor: "red", color: "white", padding: "2px 10px", border: "unset"}}> 
                     Delete
                  </button>
                </td>
            </tr> 
            )}
        </table>
        : "Empty"}
    </div>
  )
}

export default BudgetDetails