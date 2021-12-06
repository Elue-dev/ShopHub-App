import React, {     useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

export const CartMap = ({product}) => {
    const {cart, addToCart, removeFromCart} = useContext(StoreContext)

    return (
        <div>
            
        </div>
    )
}
