import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalContext'
const SetIncome = () =>{

    const { dispatch } = useContext(GlobalContext)

    const [amount, SetAmount] = useState<number>(0)
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        dispatch({
            type:"SET_INCOME",
            payload:{
        
                amount
            }
        })

        SetAmount(0)

    }
    return(
        <div>
            <h3 className='text-white font-bold'>Set Income</h3>
            <form onSubmit={handleSubmit}>
                <div className='md:flex md:flex-row md:space-x-6 sm:flex sm:flex-col'>

                
                    <div><input className='border p-2' value={amount} onChange={(e) => {SetAmount(parseInt(e.target.value));}}></input></div>
                   <div><button type='submit' className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Enter Income</button></div> 
                </div>
            </form>
        </div>
    )
}
export default SetIncome;