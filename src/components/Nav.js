import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const Nav = () => {

    const {state} = useContext(StoreContext)
    
    return (
        <div className='nav'>
            <div className='nav_items wrapper'>
                <Link className='logo' to='/'>Shop<span>Hub</span></Link>
                <Link to='/cart'><div className='cart_icon'><i className="fas fa-shopping-cart"></i><span>{state.cart.length}</span></div></Link>
            </div>
        </div>
    )
}
