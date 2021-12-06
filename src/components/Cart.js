import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

export const Cart = () => {
    const {products, removeFromCart} = useContext(StoreContext)
    const {state: {cart},
    dispatch,} = useContext(StoreContext)

    return (
        <div className='cart wrapper'>
            {cart.length > 0 ? (
                <div>
                    {cart.map(item => (
                        <div key={item.id}>
                            <img src={item.image} />
                            <p>{item.price}</p>
                            <button onClick={() =>dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: item,
                        })}>Remove From Cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                <h3>Cart Empty</h3>
            )}
        </div>
    )
}


