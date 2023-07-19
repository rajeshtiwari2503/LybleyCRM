import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import WhyChose from '../repairService/whyChose';
import Banner from './Banner';
import ContactUs from './ContactUs';

function B2B() {
  return (
    <>
      <Header />
      <Banner />
      <ContactUs />
      <WhyChose />
      <div  className="p-5"style={{backgroundColor:"#c8d8e4"}}>
        <div className='row '>
          <div className='col-12 col-md-6 col-lg-6'>
            <img alt=' ' className='card-img-top ms-5' width={200} src='https://cdn.xxl.thumbs.canstockphoto.com/service-3d-human-character-and-service-concept-3d-render-illustration-clipart_csp5757531.jpg' />
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className='shadow rounded-3 m-5 p-4' style={{backgroundColor:"#ffff"}}>
            <div className='fw-bold fs-3 '>What We Can Do For Your Business</div>
            <div className='mt-3'>As leading repair service brand, Carlcare provides end to end After-Sale Services for mobile phones, TVs, home appliances, Laptop & IT products and more.</div>
            <div className='mt-3'>Our solutions are customized to suit your specific business needs, and hence help improve effeceincy and effectiveness.</div>
            <div className='mt-3'>Our "customer first" work approach, coupled with proven service delivery network and robust technology ensures your customer service needs are not just met, but exceeded.</div> </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default B2B;