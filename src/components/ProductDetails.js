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
                    
                </div>
        </>
    )
}
