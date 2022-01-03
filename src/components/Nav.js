import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'

export const Nav = () => {

    const { state: {cart} } = useContext(StoreContext)
    const location = useLocation()
    const [showHideCart, setShowHideCart] = useState(false)

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price) * current.qty, 0).toFixed(2))
    }, [cart])
    
    return (
        <div className='nav'>
            <div className='nav_items wrapper'>
                <Link className='logo' to='/'><i className="fas fa-luggage-cart"></i> Shop<span>Hub</span></Link>
                {location.pathname !== '/cart' ? (
                    <div onClick={()=>setShowHideCart(!showHideCart)} className='cart_icon'>
                        <Link to='/cart'>
                            <i className="fas fa-shopping-cart"></i><span>{cart.length}</span>
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    )
}


