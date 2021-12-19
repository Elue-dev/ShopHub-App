import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'

export const Checkout = () => {
    let navigate = useNavigate()
    const {state: {cart}, dispatch} = useContext(StoreContext)

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price), 0))
    }, [cart])

    const handlePayment = () => {
        document.querySelector('.overlay').classList.add('show')
    }

    const modalClose = () => {
        document.querySelector('.overlay').classList.remove('show')
        navigate('/')
        if(cart.length){
            cart.length = []
        }
    }

    return (
        <>
        <div className='overlay'>
            <div className='popup'>
                {cart.length ? (
                     <div className='paid'>
                     <h1>Congratulations, you just paid for:</h1>
                     {cart.map(product => (
                         <div key={product.id}>
                             <div className='payment wrapper'>
                                 <li>{product.title} <span style={{fontWeight: '700'}}>(${product.price})</span></li>
                             </div>
                         </div>
                     ))}
                     <div className='cart_total wrapper payment_total' >
                        <span>Subtotal: ${total}</span> ({cart.length === 1 ? ('1 item') : `${cart.length} items`})
                    </div>
                 </div>
                ) : (
                    <h3>You have no items in your cart to pay for</h3>
                )}
                <span className="modal-close" onClick={modalClose}><i className="fa fa-times"></i></span>
            </div>
        </div>
        {cart.length === 0 ? (
            <div className='wrapper' style={{marginTop: '2rem'}}>
                <Link to='/' className='wrapper keep_shopping'> 
                    <i className="fas fa-arrow-left"></i>Keep Shopping
                </Link>
                <h2 className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>No items to checkout... <br/>
                Add products to your cart</h2>
            </div>
        ) : (<>
                <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> 
                <i className="fas fa-arrow-left"></i>Go back</p>
                <div className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>
                    {cart.map(item => (
                        <div key={item.id}>
                            <div className='checkout_details'>
                                <p><span>Product: </span>{item.title}</p>
                                <p><span>Price: </span>${item.price}</p>
                                <button onClick={() =>dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: item,
                                    })} className='btn cart_btn'><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )}
         <div className='cart_total wrapper' style={{marginTop: '2rem'}}>
             <span>Total: ${total}</span> ({cart.length === 1 ? ('1 item') : `${cart.length} items`})
         </div>
             <div className='payment wrapper'>
                { cart.length ? <button onClick={handlePayment} className='btn checkout_btn'>Make Payment</button> : ''}
            </div>
        </>
    )
}