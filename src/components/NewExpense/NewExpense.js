import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){
    const[isEditing,setIsEditing]=useState(false);
    const saveExpensedatahandler=(enteredExpenseData)=>{
        const expensedata={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expensedata);
        setIsEditing(false);
    }
    const startEditingHandling=()=>{
        setIsEditing(true);
    };
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandling}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpensedatahandler} onCancel={stopEditingHandler}/>}
        </div>
    );

}
export default NewExpense;