import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'

export const Checkout = () => {
    let navigate = useNavigate()
    const {state: {cart}} = useContext(StoreContext)

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price), 0))
    }, [cart])

    return (
        <>
        {cart.length === 0 ? (<div className='wrapper' style={{marginTop: '2rem'}}>
                <Link to='/' className='wrapper keep_shopping'> 
                <i className="fas fa-arrow-left"></i>Keep Shopping</Link>
                <h2 className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>No items to checkout</h2>
            </div>
        ) : (<>
                <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> 
                <i className="fas fa-arrow-left"></i>Go back</p>
                <div className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>
                    {cart.map(item => (<>
                        <div className='flex_checkout'>
                            <p>{item.title}:</p>
                            <p style={{fontWeight: '700'}}>${item.price}</p>
                        </div>
                        </>
                    ))}
                </div>
            </>
        )}
         <div className='cart_total wrapper' style={{marginTop: '2rem'}}>Total: ${total} ({cart.length} items)</div>
         <Link to='#' className='center_btn wrapper'>
                <button className='btn checkout_btn'>Make Payment</button>
         </Link>
        </>
    )
}
