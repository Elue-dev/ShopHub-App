import React from 'react'
import { Link } from 'react-router-dom'

export const Payment = () => {
    return (<>
            <Link to='/'>
                 <p className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Keep Shopping</p>
            </Link>
            <div className='payment_page'>
                <h1>Payment Page</h1>
            </div>
        </>
    )
}
