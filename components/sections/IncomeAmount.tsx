import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext";
 const IncomeAmount = () =>{
     const {state} = useContext(GlobalContext)
     const {income} = state
     return(
        <div className='border p-4 bg-white rounded-lg'>
            <p className='text-center'>Income</p>
            <p className='text-center text-green-600'>${income.toFixed(2)}</p>

        </div>
        )
 }
 export default IncomeAmount