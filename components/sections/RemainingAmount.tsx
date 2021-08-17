import React, {useContext, useMemo} from "react";
import { GlobalContext } from "../../context/GlobalContext";

 const RemainingAmount = () =>{
    const {state} = useContext(GlobalContext)
    const {income , expenses} = state
    const memoizedRemaining = useMemo(()=>{return income - expenses.reduce((a,v)=> a = a + v.amount, 0)},[income,expenses])
    
    return(
        <div className='border p-4 bg-white rounded-lg'>
            <p className='text-center'>Remaining</p>
            <p className={memoizedRemaining > 0 ? 'text-green-600 text-center':'text-red-600 text-center'}>${memoizedRemaining.toFixed(2)}</p>
        </div>
        )
 }
 export default RemainingAmount