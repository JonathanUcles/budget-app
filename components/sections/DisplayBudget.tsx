import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import ExpenseCard  from './ExpenseCard'

const DisplayBudget = () =>{
   const {state} = useContext(GlobalContext)
   const { expenses } = state

    return(
        <div>
            <ul >
                {expenses.map((expense)=>(
                    <div>
                        < ExpenseCard expenses={expense}/>
                    </div>

                ))}
            </ul>


        </div>
    )
}
export default DisplayBudget