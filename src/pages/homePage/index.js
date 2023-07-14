import React from 'react'
 
import { Footer } from '../common/Footer'
import Header from '../common/Header'
import Search from '../search'
import Carousel from '../common/Carousel'

export const HomePage = () => {
    return (
        <div >
        <Header />
            <Carousel />
            <Search />
            <div className='container'>HomePage</div>
            <Footer />
        </div>
    )
}
