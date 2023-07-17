import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-bootstrap/Carousel'

const RecommendedServices = () => {
    return (
        <div className='mt-5 mb-5'>
            <div>
                <div className='text-center'><h4>  Services</h4></div>
                <div className='text-center'><h2>Other Recommended Services</h2></div>
                <div >
                    <Carousel>
                        <Carousel.Item >
                           <div>dghgg</div>
                            <Carousel.Caption>
                                {/* <h3>First Demo </h3>   */}
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item>
                            
                            <Carousel.Caption>
                                {/* <h3>Second Demo</h3>   */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
 
                            <Carousel.Caption>
                                {/* <h3>Third Demo</h3>   */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default RecommendedServices;