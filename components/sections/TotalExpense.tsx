import React, {useContext, useMemo} from "react";
import { GlobalContext } from "../../context/GlobalContext";

 const TotalExpense = () =>{
     const {state} = useContext(GlobalContext)
     const {expenses} = state
     const memoizedTotalExpenses = useMemo(()=>{return expenses.reduce((a,v)=> a = a + v.amount, 0)},[expenses])
     return(
        <div className='border p-4 bg-white rounded-lg'>
            <p className='text-center'>Expenses</p>
            <p className='text-center text-red-600'> ${memoizedTotalExpenses.toFixed(2)}</p>
        </div>
        )
 }
 export default TotalExpense