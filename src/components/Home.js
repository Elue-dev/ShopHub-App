import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { SingleProduct } from './SingleProduct'

export const Home = () => {
    const {products, setProducts} = useContext(StoreContext)

    useEffect(() => {
        storeData()
      },[])

      const storeData = async () => {
        const storeApi = await fetch ('https://fakestoreapi.com/products')
        const response = await storeApi.json()
        setProducts(response)
      }

    return (<div className='movie-grid wrapper'>
        {products.map(product => (
            <SingleProduct product={product} key={product.id} />
        ))}
        </div>
    )
}
