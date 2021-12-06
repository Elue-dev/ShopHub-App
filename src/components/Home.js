import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { SingleProduct } from './SingleProduct'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

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

    return (
        <>
            {products.length === 0 ? (
              <div className='spinner'>
                <FontAwesomeIcon icon='spinner' size='3x' spin />
              </div>
            ) : (
              <div className='movie-grid wrapper'>
                {products.map(product => (
                    <SingleProduct product={product} key={product.id} />
                ))}
              </div>
            )}
        </>
    )
}
