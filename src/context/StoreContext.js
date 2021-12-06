import React, { useState, createContext, useReducer } from 'react'
import { StoreReducer } from './StoreReducer'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    const [state, dispatch] = useReducer(StoreReducer, {
        cart:[]
    })

    // const addToCart = () => {
    //         setCart(prevCart => [...prevCart, {...products}] )
    // }

    // const removeFromCart = id => {
    //     setCart(products.filter(p => p.id !== id))
    // }

    return(
        <StoreContext.Provider value={{
            products,
            setProducts,
            cart,
            state,
            dispatch
        }}>
            {children}
        </StoreContext.Provider>
    )
}