import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Kit from '../repairService/kit';
import WhyChose from '../repairService/whyChose';
import Reviews from '../repairService/reviews';
import Faqs from '../repairService/faqs';
import RecommendedServices from '../repairService/recommendedServices';
import Blog from '../repairService/blog';
import Plan from './plan';
import {motion} from "framer-motion"

function HomeApplincesRepair() {
  return (
    <>
      <Header />
      <motion.div className="container mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="row">
          <div className="col-6 d-none d-md-block">
            <img src="https://images.ctfassets.net/16nm6vz43ids/IU1pnLyAMxTMrCxiSxHcd/e3c0752402bc6b86508dd2f079ac8652/image-repair.png" alt="" className='card-img-top' />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div >
              <h1 className='fw-bold my-3'>Washing Machine Repair Service</h1>
              <h4 className='text-muted my-3'>Sit back, relax and let us take care of your refrigerator repairs</h4>
              <button className='fw-bold my-3   btn btn-warning rounded-pill px-5 py-2'><h5 className='m-0 fw-bold px-2 py-1'>GET STARTED</h5></button>
            </div>
          </div>
        </div>
      </motion.div>


      <Plan />
      <Kit />
      <WhyChose />
      <Reviews />
      <div className="container mt-2">
        <Faqs />
      </div>
      <RecommendedServices />
      <div className="container mt-2">
        <Blog />
      </div>
      <Footer />
    </>
  )
}
export default HomeApplincesRepair;
