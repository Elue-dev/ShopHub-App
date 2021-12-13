import React, { useState, createContext, useReducer } from 'react'
import { StoreReducer } from './StoreReducer'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const saveToLocalStorage = (items) => {
        localStorage.setItem('product', JSON.stringify(items))
    }

    const [state, dispatch] = useReducer(StoreReducer, {
        cart:[]
    })

    return(
        <StoreContext.Provider value={{
            products,
            setProducts,
            currentPage,
            setCurrentPage,
            postsPerPage,
            paginate,
            // saveToLocalStorage,
            state,
            dispatch
        }}>
            {children}
        </StoreContext.Provider>
    )
}