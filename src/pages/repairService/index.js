import React from 'react'
import Header from '../common/Header'
 
import Service from './service'
 
import Faqs from './faqs';
import RecommendedServices from './recommendedServices';
import { Footer } from '../common/Footer';
import WhyChose from './whyChose';
import Reviews from './reviews';
 

const Repair = () => {
  return (
    <div>
        <Header />
        <div class="container mt-2">
        <div class="row">
            <div class="col-6 d-none d-md-block">
           <img src="https://images.ctfassets.net/16nm6vz43ids/IU1pnLyAMxTMrCxiSxHcd/e3c0752402bc6b86508dd2f079ac8652/image-repair.png" alt="" className='card-img-top' />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <div >
                <h1 className='fw-bold my-3'>Washing Machine Repair Service</h1>
                <h4 className='text-muted my-3'>Sit back, relax and let us take care of your refrigerator repairs</h4>
                <button className='fw-bold my-3 btn btn-warning rounded-pill px-5 py-2'><h5 className='m-0 fw-bold px-2 py-1'>GET STARTED</h5></button>
                </div>
            </div>
        </div>
 
       
    
      
        </div>
 
        <Service />
     <WhyChose />
     <Reviews />
        <div className="container mt-2">
        <Faqs />
        </div>
        <RecommendedServices />
        <Footer />
 
    </div>
  )
}

export default Repair;