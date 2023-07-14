import React from 'react'
 
import { Footer } from '../common/Footer'
import Header from '../common/Header'
import Search from '../search'

export const HomePage = () => {
    return (
        <div className='container'>
        <Header />
            <div>HomePage</div>
            <Search />
            <Footer />
        </div>
    )
}
