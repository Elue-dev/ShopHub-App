import React, { useState, useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import '../App.css'

export const Cart = () => {
    const {state: {cart}, dispatch} = useContext(StoreContext)
    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price), 0))
    }, [cart])

    return (<>
        <div className='cart wrapper'>
            {cart.length > 0 ? (
                <div>
                    {cart.map(item => (
                        <div className='cart_items' key={item.id}>
                            <div className='cart_image_container'>
                                <img src={item.image} alt={item.title} className='cart_image' />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                                <button onClick={() =>dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: item,
                                })} className='btn cart_btn'><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <h3 style={{textAlign: 'center'}}> Your Cart is Empty</h3>
                    <Link to='/' className='center_btn'>
                        <button className='btn shop_cart'>Shop Now</button>
                    </Link>
                    </>
            )}
        </div>
        <div className='cart_total wrapper'>Total: ${total}</div>
      </>
    )
}


