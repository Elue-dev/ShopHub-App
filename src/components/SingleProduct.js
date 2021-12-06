import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const SingleProduct = ({product}) => {

    const {state,
        dispatch,} = useContext(StoreContext)

    return (
        <div className='product' key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
                {state.cart.some(p => p.id === product.id) ? (
                        <button onClick={() =>dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product,
                        })}>Remove From Cart</button>
                    ) : (
                        <button onClick={() =>dispatch({
                            type: 'ADD_TO_CART',
                            payload: product,
                        })}>Add To Cart</button>
                    )}
            </div>
    )
}

