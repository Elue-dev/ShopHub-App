import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'

export const Nav = () => {

    const {state: {cart}, dispatch} = useContext(StoreContext)
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
                {/* {location.pathname !== '/cart' ? 
                        <div className='cart_icon'><i className="fas fa-shopping-cart"></i><span>{cart.length}</span></div> : null
            } */}
            {location.pathname !== '/cart' ? (
                <div onClick={()=>setShowHideCart(!showHideCart)} className='cart_icon'>
                 <i className="fas fa-shopping-cart"></i><span>{cart.length}</span>
                </div>
            ) : null}
            </div>
            <div className={showHideCart ? 'showcart show' : 'showcart'}>
                {cart.length === 0 ? (
                    <div className='empty_cart'>
                        <h3 style={{textAlign: 'center', color: '#000'}}> Your Cart is Empty</h3>
                        <Link to='/' onClick={()=>setShowHideCart(!showHideCart)} className='center_btn shop_btn'>
                            <button className='btn shop_cart'>Shop Now</button>
                        </Link>
                    </div>
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id} className='showcart_wrapper'>
                                <img src={item.image} alt={item.title} className='show_cart_img' />
                                <div className='nav_flex'>
                                    <p className='black title'>{item.title}</p>
                                    <p className='black bold'>${item.price}</p>
                                </div>
                                <div>
                                    <button onClick={() =>dispatch({
                                                type: 'REMOVE_FROM_CART',
                                                payload: item,
                                            })} className='btn cart_btn nav_del'><i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
                <div className='cart_total wrapper nav_total'>
                    <span className='black width'>Total: ${total}</span> ({cart.length === 1 ? ('1 item') : `${cart.length} items`})
                </div>
                {cart.length ? (<div className='nav_btn'>
                        <Link to='/cart'><button onClick={()=>setShowHideCart(false)} className='btn nav_view_in_cart'>View in Cart</button></Link>
                </div>) : null}
            </div>
        </div>
    )
}


