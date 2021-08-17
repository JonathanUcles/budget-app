import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalContext'
const AddExpense = () =>{
    const { dispatch } = useContext(GlobalContext)
    const [label,SetLabel] = useState<string>('')
    const [amount, SetAmount] = useState<number>(0)
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        dispatch({
            type:"ADD_EXPENSE",
            payload:{
                id: Math.floor(Math.random() * 10000),
                label,
                amount
            }
        })
        SetLabel('')
        SetAmount(0)

    }
    return(
        <div>
    
            <form onSubmit={handleSubmit}>
                <div className='md:flex md:flex-row md:space-x-6 sm:flex sm:flex-col'>
                    <div>
                        <p className='text-white font-bold'>Expense Name</p>
                        <input className='border p-2' value={label} onChange={(e) => {SetLabel(e.target.value)}} />
                        
                    </div>
                    <div>

                        <p className='text-white font-bold'>Expense Amount</p>
                        <input className='border p-2' value={amount} onChange={(e) => {SetAmount(parseInt(e.target.value));}}></input>
                    </div>
                    <div>
                        <p>{' '}</p>
                        <button type='submit' className='mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Enter Expense</button>

                    </div>
                </div>
                


            </form>
        </div>
    )
}
export default AddExpense;