import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { SingleProduct } from './SingleProduct'

export const Home = () => {
    const {products, setProducts, cart, addToCart, removeFromCart} = useContext(StoreContext)

    

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
            <SingleProduct product={product} key={product.id} />
        ))}
        </div>
    )
}
