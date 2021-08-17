import type {ReactNode} from 'react'
import { createContext, useReducer, Dispatch } from 'react'
import {Action} from './types'

const DefaultState = {
    income:0,
    expenses:
    [
        
    ],
}



export type State = typeof DefaultState

export const GlobalContext = createContext<{state:State; dispatch:Dispatch<Action>}>({ state: DefaultState, dispatch: () => null })
export const GlobalReducer = (state:State, action:Action)=>{
    switch(action.type){
        case 'SET_INCOME':
            return{
                ...state,
                income: action.payload.amount
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [ action.payload, ...state.expenses]
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id != action.payload
                )
            };
        default:
            return state
    }

}

export const GlobalProvider  = ({children}:{children:ReactNode})=>{
    const [state, dispatch] = useReducer(GlobalReducer,DefaultState)


    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}

        </GlobalContext.Provider>

    )
}