import React, { useState, createContext, useReducer } from 'react'
import { StoreReducer } from './StoreReducer'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const [state, dispatch] = useReducer(StoreReducer, {
        cart:[]
    })

    return(
        <StoreContext.Provider value={{
            products,
            setProducts,
            state,
            dispatch
        }}>
            {children}
        </StoreContext.Provider>
    )
}