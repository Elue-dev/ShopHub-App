import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Payment = () => {
    let navigate = useNavigate()

    return (
        <>
            <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Go back</p>
            <div className='payment_page'>
                <h1>Payment Page</h1>
            </div>
        </>
    )
}
