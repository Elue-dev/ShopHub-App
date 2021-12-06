import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const Nav = () => {

    const {state: {cart}} = useContext(StoreContext)
    
    return (
        <div className='nav'>
            <div className='nav_items wrapper'>
                <Link className='logo' to='/'><i className="fas fa-luggage-cart"></i> Shop<span>Hub</span></Link>
                <Link to='/cart'><div className='cart_icon'><i className="fas fa-shopping-cart"></i><span>{cart.length}</span></div></Link>
            </div>
        </div>
    )
}
