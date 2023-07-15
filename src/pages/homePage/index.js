import React from 'react'
 
import { Footer } from '../common/Footer'
import Header from '../common/Header'
import Search from '../search'
import Carousel from '../common/Carousel'
import Services from '../service'
 

export const HomePage = () => {
    return (
        <div >
        <Header />
            <Carousel />
            <Search />
            <div className='container mt-5 mb-5'>
          
             <Services />
           
            </div>
            <Footer />
        </div>
    )
}
