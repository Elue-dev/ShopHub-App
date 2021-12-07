import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

export const ProductDetails = ({product}) => {
    const [item, setItem] = useState([])
    const params = useParams()

    const {state, dispatch} = useContext(StoreContext)

    useEffect(() => {
        itemDetail()
    },[])

    const itemDetail = async () => {
        const itemData = await fetch (`https://fakestoreapi.com/products/${params.id}`)
        const response = await itemData.json()
        setItem(response)
    }

    if(item.title === undefined){
        return <FontAwesomeIcon icon='spinner' className='spinner' size='3x' spin />

    }

    return (
        <>
                <Link to='/'>
                    <p className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Keep Shopping</p>
                </Link>
                <div className='product_detail wrapper' key={item.id}>
                    <div class='product_detail_container'>
                        <img src={item.image} alt={item.name} className='prod_detail_img' />
                        <p><b>Category:</b> {item.category}</p>
                        <p><b>Name:</b> {item.title}</p>
                        <p><b>Description:</b> {item.description}</p>
                        <p><b>Price:</b> ${item.price}</p>
                        {state.cart.some(p => p.id === item.id) ? (
                             <Link to='/cart'><button className='btn view_in_cart'>View in Cart</button></Link>
                        ) : (
                            <button onClick={() =>dispatch({
                                type: 'ADD_TO_CART',
                                payload: item,
                            })} className='btn add_to_cart det'>Add To Cart</button>
                        )}
                    </div>
                </div>
        </>
    )
}
