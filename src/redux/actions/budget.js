export const setBudget = (items) => ({type: 'SET_BUDGET', payload: items})
export const addItemToBudget = (items) => ({type: 'ADD_TO_BUDGET', payload: items})
export const updateBudgetAction = (item) => ({ type: "UPDATE_BUDGET", payload: item })
export const deleteBudgetAction = (id) => ({ type: "DELETE_BUDGET",payload: id})