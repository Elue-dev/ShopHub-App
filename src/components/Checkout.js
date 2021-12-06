import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const Checkout = () => {
    let navigate = useNavigate()
    const {state: {cart}} = useContext(StoreContext)

    return (
        <>
        {cart.length === 0 ? (
            <h2 className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>No items to checkout</h2>
        ) : (<>
                <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> 
                <i className="fas fa-arrow-left"></i>Go back</p>
                <div className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>
                    <h1>Checkout Page</h1>
                </div>
            </>
        )}
        </>
    )
}
