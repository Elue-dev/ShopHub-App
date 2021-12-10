import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'


export const Payment = () => {
    let navigate = useNavigate()
    const [total, setTotal] = useState()
    const { state: {cart} } = useContext(StoreContext)

    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price), 0))
    }, [cart])

    return (
        <>
        {cart.length === 0 ? (
            <>
                <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Go back</p>
            <div className='payment_page'>
                <h1>Add items to your cart to proceed further</h1>
            </div>
            </>
        ) : (
                <>
                <div className='paid'>
                    <h1>Congratulations, you just paid for:</h1>
                    {cart.map(product => (
                        <div key={product.id}>
                            <div className='payment wrapper'>
                                <li>{product.title} <span style={{fontWeight: '700'}}>(${product.price})</span></li>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cart_total wrapper payment_total' >
                        <span>Subtotal: ${total}</span> ({cart.length === 1 ? ('1 item') : `${cart.length} items`})
                </div>
                </>
            )}
        </>
    )
}
