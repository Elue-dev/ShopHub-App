import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'

export const SingleProduct = ({product}) => {

    const {state: {cart}, dispatch} = useContext(StoreContext)

    return (
        <div className='product'>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price} </p>
                    <div style={{marginTop: '1rem'}}>
                        <Link to={`/products/${product.id}`}>
                            <button className=' btn cart_detail'>View Details</button>
                        </Link>
                        {cart.some(p => p.id === product.id) ? (
                            <button onClick={() =>dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: product,
                            })} className='btn remove_from_cart'>Remove From Cart</button>
                        ) : (
                            <button onClick={() =>dispatch({
                                type: 'ADD_TO_CART',
                                payload: product,
                            })} className='btn add_to_cart'>Add To Cart</button>
                        )}
                    </div>

            </div>
    )
}

