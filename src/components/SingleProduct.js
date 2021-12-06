import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const SingleProduct = ({product}) => {

    const { dispatch } = useContext(StoreContext)

    return (
        <div className='product' key={product.id}>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
            </div>
    )
}

