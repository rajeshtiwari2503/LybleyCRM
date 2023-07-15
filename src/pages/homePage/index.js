import React from 'react'
 
import { Footer } from '../common/Footer'
import Header from '../common/Header'
import Search from '../search'
import Carousels from '../common/Carousel'
import Services from '../service'
 

export const HomePage = () => {
    return (
        <div >
        <Header />
            <Carousels />
            <div className='container mt-5 mb-5'>
            <Search />
             <Services />
           
            </div>
            <Footer />
        </div>
    )
}
