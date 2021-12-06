import React, {} from 'react'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
    let navigate = useNavigate()

    return (
        <>
            <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> 
            <i className="fas fa-arrow-left"></i>Go back</p>
            <div className='wrapper' style={{textAlign: 'center', marginTop: '4rem'}}>
                <h1>Checkout Page</h1>
            </div>
        </>
    )
}
