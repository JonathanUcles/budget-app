import React from 'react'
import AddExpense from '../sections/AddExpense'
import DisplayBudget from '../sections/DisplayBudget'
import SetIncome from '../sections/SetIncome'
import TotalExpense from '../sections/TotalExpense'
import RemainingAmount from '../sections/RemainingAmount'
import IncomeAmount from '../sections/IncomeAmount'
const IndexView = () =>{
    return(
        <div className=''>
            <div className='pb-4 pt-6'>
                <h1 className='text-4xl font-bold text-center text-white'>Budget Planner</h1>

                <div className='flex flex-row space-x-4 justify-center my-4'>
                    <div>< IncomeAmount /></div>
                    <div>< TotalExpense /></div>
                    <div><RemainingAmount /></div>

                </div>
                <div className='md:flex md:flex-row md:space-x-4 md:my-4 md:justify-center sm:flex sm:flex-col '>
                        <div className='border p-4'>< SetIncome /></div>
                        <div className='border p-4'>< AddExpense /></div>
                </div>
            </div>
            
            <div className='rounded-2xl border bg-white min-h-screen p-4'>
                <div className='text-2xl font-bold'>Expenses Breakdown</div>
                <div className='p-4 my-4'>< DisplayBudget /></div>
            </div>
        </div>
    )
}
export default IndexView