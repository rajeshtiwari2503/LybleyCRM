import React from 'react'

import Footer from '../common/Footer'
import Header from '../common/Header'
import Search from '../search'
import Carousels from '../common/Carousel'
import Services from '../service'
import Reviews from '../repairService/reviews'
import WhyChose from '../repairService/whyChose'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const HomePage = () => {
    return (
        <div className='' style={{ backgroundColor: "#f2f2f2",fontFamily:"san-serif" }}>
            <Header />

            <Carousels />
            <Search />

            <div className='container mt-4'>

                <Services />
            </div>
            <div className="mt-4">
                <WhyChose />
            </div>
            <div className='py-2 '>
                <Reviews />
            </div>
             <div className='bg-light'>
            <div className="container" >
                <div className="row w-100">
                    <div className="col-12 col-md-6 py-5">
                        <div className="ps-5">
                        <h1>Get WOW Experience on Our App</h1>
                        <h5><CheckCircleIcon  color='primary'/> Same Day Service & Repairs</h5>
                        <h5><CheckCircleIcon color='primary' /> Get Expert Assistance</h5>
                        <h5><CheckCircleIcon  color='primary'/> Best Offers & Discounts</h5>
                        <h6 className='mt-5'>Get the app download link on your mobile phone</h6>
                        <div className="form-group d-flex">
                            <input type="text" name="number" className='shadow form-control rounded-end-0 w-50 ps-3' placeholder='Enter Mobile Number' /><button className='shadow btn btn-primary rounded-start-0'>GET APP LINK</button>
                        </div>
                        <div className="pb-4 text-center mt-4 me-5">
                            <h6 className='fw-bold' style={{color:"yellow"}}><i> DOWNLOAD LY3LEY APP</i></h6>
                            <div>
                                <img className='me-2 bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/playstore_trans.png?w=256&q=75" width="160px" alt="" />
                                <img className='bg-dark rounded' src="https://d2js0267gg4oqb.cloudfront.net/static/images/home/appstore_trans.png?w=256&q=75" width="160px" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 py-5">
                        <img src="https://crdms.images.consumerreports.org/prod/products/cr/models/407621-smartphones-apple-iphone-14-pro-10032754.png" className='card-img-top' width="600px" alt="" />
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default HomePage;
