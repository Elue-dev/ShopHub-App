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
        <Link to='/'>
            <p className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Keep Shopping</p>
        </Link>
        <div className='cart wrapper'>
            {cart.length > 0 ? (
                <div>
                    {cart.map(item => (
                        <div key={item.id}>
                                <div className='cart_items'>
                                    <div className='cart_image_container'>
                                        <img src={item.image} alt={item.title} className='cart_image' />
                                    </div>
                                    <div style={{lineHeight: '2.3'}}>
                                        <p>{item.title}</p>
                                        <p style={{marginBottom: '.5rem'}}><span>Price:</span> ${item.price}</p>
                                        <button onClick={() =>dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: item,
                                        })} className='btn cart_btn'><i className="fas fa-trash-alt"></i></button>
                                    </div>
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
                <div className='cart_total wrapper'><span>Total: ${total}</span>  
                ({cart.length === 1 ? ('1 item') : `${cart.length} items`})
                </div>
                <Link to='/checkout' className='center_btn wrapper'>
                   {cart.length?  <button className='btn checkout_btn'>Proceed to Checkout</button> : ''}
                </Link>
      </>
    )
}


