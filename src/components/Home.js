import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { SingleProduct } from './SingleProduct'
import { Pagination } from './Pagination';
import { Footer } from './Footer';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

export const Home = () => {
    const { products, setProducts, currentPage, postsPerPage } = useContext(StoreContext)
    

    useEffect(() => {
        storeData()
      },[])

      const storeData = async () => {
        const storeApi = await fetch ('https://fakestoreapi.com/products')
        const response = await storeApi.json()
        setProducts(response)
        console.log(response)
      }

      const indexOfLastPost = currentPage * postsPerPage
      const indexOfFirstPost = indexOfLastPost - postsPerPage
      const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <>
            {products.length === 0 ? (
              <div className='spinner'>
                <FontAwesomeIcon icon='spinner' size='3x' spin />
              </div>
            ) : (
                  <>
                    <h1 className='movie_grid_title'>Products</h1>
                    <div className='movie-grid wrapper'>
                      {currentPosts.map(product => (
                          <SingleProduct product={product} key={product.id} />
                      ))}
                    </div>
                  </>
            )}
            <Pagination />
            {products.length ? <Footer /> : ''}
        </>
    )
}
