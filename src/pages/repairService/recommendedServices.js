import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-bootstrap/Carousel'
import style from "./repair.module.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RecommendedServices = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className='bg-secondary' >
                <div style={{width:"95%"}} className='text-center mt-1'><h4>  Services</h4></div>
                <div style={{width:"95%"}} className='text-center'><h2>Other Recommended Services</h2></div>
                <div className='row'>
                    <div className='col-12 col-md-3 col-lg-3'>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6  '>

                        <div >
                            <Carousel  controls={false} >
                                <Carousel.Item  >
                                <div className={`${style.cardHead} mt-3`}>
                                        <div className='text-start'>
                                            <h2>Annual Service Plan for UV & RO Water Purifiers</h2>
                                            <div className='mt-3'><CheckCircleIcon color='success'/> Annual Service Plan for UV & RO Water Purifiers</div>
                                            <div className='mt-3'><CheckCircleIcon color='success'/> Annual Service Plan for UV & RO Water Purifiers</div>
                                            <div className='mt-5 text-center'>
                                                <button className='fw-bold   btn btn-warning rounded-pill px-5 py-2'><h5 className='m-0 fw-bold px-2 py-1'>EXPLORE PLAN</h5></button>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <Carousel.Caption>
                                        {/* <h3>First Demo </h3>   */}
                                    </Carousel.Caption>
                                </Carousel.Item  >
                                <Carousel.Item>
                                    <div className={`${style.cardHead} mt-3`}>
                                        <div className='text-start'>
                                            <h2>Annual Service Plan for UV & RO Water Purifiers</h2>
                                            <div className='mt-3'><CheckCircleIcon color='success'/> Annual Service Plan for UV & RO Water Purifiers</div>
                                            <div className='mt-3'><CheckCircleIcon color='success'/> Annual Service Plan for UV & RO Water Purifiers</div>
                                            <div className='mt-5 text-center'>
                                                <button className='fw-bold   btn btn-warning rounded-pill px-5 py-2'><h5 className='m-0 fw-bold px-2 py-1'>EXPLORE PLAN</h5></button>
                                            </div>
                                        </div>
                                    </div>
                                    <Carousel.Caption>
                                        {/* <h3>Second Demo</h3> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className={`${style.cardHead} mt-3`}>
                                        <div className='text-start'>
                                            <h2>Annual Service Plan for UV & RO Water Purifiers</h2>
                                            <div className='mt-3'><CheckCircleIcon color='success'/> Annual Service Plan f</div>
                                            <div className='mt-3'><CheckCircleIcon color='success'/> Annual Service Plan  </div>
                                            <div className='mt-5 text-center'>
                                                <button className='fw-bold   btn btn-warning rounded-pill px-5 py-2'><h5 className='m-0 fw-bold px-2 py-1'>EXPLORE PLAN</h5></button>
                                            </div>
                                        </div>
                                    </div>
                                    <Carousel.Caption>
                                        {/* <h3>Third Demo</h3>   */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-3 col-lg-3'>
                </div>
            </div>
        </div>
    )
}

export default RecommendedServices;