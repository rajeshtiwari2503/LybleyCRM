import React from 'react'

const Banner = () => {
    return (
        <div>
            <div>
                <img className='card-img-top' alt='' width="100%" height={590} src='https://e1.pxfuel.com/desktop-wallpaper/467/878/desktop-wallpaper-business-solutions-success-and-strategy-concept-business-plan.jpg' />
            </div>
            <div className=' container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6 mt-5'>
                        <div className='fw-bold fs-3 text-primary'>Customized, Cost-Effective
                            Solutions for Your Business
                        </div>
                        <div className='mt-3'>
                        As a leading repair service brand in India, Carlcare provides end to end after-sales services for a range of electoric equipment and home appliances including mobile phones, TVs, Air Conditioners, fans, Refrigerators, Laptops & IT products & more.
                        </div>
                        <div className='mt-3'>
                        Our well-streamed hierarchy of experienced & ambitious professionals, a proven service delivery network and robust technology ensure your customer service needs will not just be met, but exceeded.
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 mt-5'>
                      <div className='fw-bold fs-3 text-dark'>
                       Trusted by multiple leading Brands
                      </div>
                      <div>
                        <img className='card-img-top mt-5' alt='' width="100%" height={200}   src='https://www.shutterstock.com/shutterstock/photos/207668356/display_1500/stock-photo-brand-written-on-multiple-road-sign-207668356.jpg'/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner