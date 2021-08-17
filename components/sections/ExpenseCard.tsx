import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalContext'
type Props = {
    expenses : {
        id:number
        label:string;
        amount:number;

    }

   
}
const ExpenseCard = ({expenses}:Props) =>{
    const { dispatch } = useContext(GlobalContext)
    const deleteExpense = (id) =>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:id
        })
    }
    return(
        <div className='border p-3 '>
            <div className='flex flex-row space-x-3'>
                <div className='font-bold w-1/3'><p>{expenses.label}</p></div>
                <div className=' w-1/3'><p>${expenses.amount.toFixed(2)}</p></div>
                <div className=' w-1/3'><button onClick={()=>deleteExpense(expenses.id)} className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>Delete</button></div>
            </div>
        </div>
    )

}
export default ExpenseCard;