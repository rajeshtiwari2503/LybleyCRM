import React from 'react'
 
import { Footer } from '../common/Footer'
import Header from '../common/Header'
import Search from '../search'

export const HomePage = () => {
    return (
        <div >
        <Header />

            <div>HomePage</div>
            <Search />
            <div className='container'>HomePage</div>
            <Footer />
        </div>
    )
}
