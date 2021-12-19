import React, { useState, createContext, useReducer } from 'react'
import { StoreReducer } from './StoreReducer'

export const StoreContext = createContext()

export const StoreProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
            state,
            dispatch
        }}>
            {children}
        </StoreContext.Provider>
    )
}