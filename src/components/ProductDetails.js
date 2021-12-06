import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

export const ProductDetails = ({product}) => {
    const [item, setItem] = useState([])
    const params = useParams()

    const {state,
    dispatch,} = useContext(StoreContext)

    useEffect(() => {
        itemDetail()
    },[])

    const itemDetail = async () => {
        const itemData = await fetch (`https://fakestoreapi.com/products/${params.id}`)
        const response = await itemData.json()
        setItem(response)
        console.log(response)
    }

    if(item.title === undefined){
        return <h1 className='wrapper' style={{marginTop: '1rem'}}>Loading...</h1>
    }

    return (
        <>
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.category}</p>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    {state.cart.some(p => p.id === item.id) ? (
                        <button onClick={() =>dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: item,
                        })}>Remove From Cart</button>
                    ) : (
                        <button onClick={() =>dispatch({
                            type: 'ADD_TO_CART',
                            payload: item,
                        })}>Add To Cart</button>
                    )}
                </div>
        </>
    )
}
