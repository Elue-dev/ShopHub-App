import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const Home = () => {
    const {products, setProducts, cart, addToCart, removeFromCart} = useContext(StoreContext)

    const {state,
        dispatch,} = useContext(StoreContext)

    useEffect(() => {
        storeData()
      },[])

      const storeData = async () => {
        const storeApi = await fetch ('https://fakestoreapi.com/products')
        const response = await storeApi.json()
        setProducts(response)
        console.log(response)
      }

    return (<div className='movie-grid wrapper'>
        {products.map(product => (
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
        ))}
        </div>
    )
}
