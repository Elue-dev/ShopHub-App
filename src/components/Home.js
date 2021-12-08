import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { SingleProduct } from './SingleProduct'
import '../App.css'
import gif from '../assets/loader3.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Pagination } from './Pagination';
library.add(faSpinner);


export const Home = () => {
    const {products, setProducts, currentPage, postsPerPage} = useContext(StoreContext)
    

    useEffect(() => {
        storeData()
      },[])

      const storeData = async () => {
        const storeApi = await fetch ('https://fakestoreapi.com/products')
        const response = await storeApi.json()
        setProducts(response)
      }

      const indexOfLastPost = currentPage * postsPerPage
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <>
            {products.length === 0 ? (
              <div className='spinner'>
                {/* <FontAwesomeIcon icon='spinner' size='3x' spin /> */}
                <img src={gif}></img>
              </div>
            ) : (
              <div className='movie-grid wrapper'>
                {currentPosts.map(product => (
                    <SingleProduct product={product} key={product.id} />
                ))}
              </div>
            )}
            <Pagination />
        </>
    )
}
