import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import '../App.css'


export const Pagination = () => {
    const {products, postsPerPage, paginate} = useContext(StoreContext)
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(products.length / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className='paginate_list wrapper'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={()=> paginate(number)} href='#' className='paginate_link'>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
