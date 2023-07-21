import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
 

function ActivatePlan() {
  return (
    <div>
      <Header />
      <div className="row w-100 mt-5 mb-5">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div className='text-center p-5'>
          <img src="https://d2js0267gg4oqb.cloudfront.net/static/images/activation/group-10.png?w=256&q=75" alt="" />
          <h1 className='py-3'>Thank you for purchasing the LY3LEY Plan!</h1>
          <h5 className='text-muted'>If you haven’t received your certificate yet, you can easily get it now by just entering your order details.</h5>
        </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
        <div className="shadow rounded w-75 h-100 p-5">
          <h6 className='text-center'>Enter the registered email ID or mobile number and get an instant invite for your Certificate Of Protection</h6>
          <div className="form-group">
          <label for="" className='text-muted mt-5'>Purchased LY3LEY plan from</label>
           <select className="form-select mt-3">
            <option value="">Amazon</option>
            <option value="">Flipkart</option>
            <option value="">Croma</option>
           </select>
          </div>
          <div className="form-group">
          <label for="" className='text-muted mt-5'>Enter your email-id or phone number</label>
           <input type="text" className='form-control mt-3' />
          </div>
          <div className="text-center mt-3">
        <button className='fw-bold my-3 btn btn-warning rounded-pill px-5 py-2'><h5 className='m-0 fw-bold px-2 py-1'>SUBMIT DETAILS</h5></button>
        </div>
        </div>        
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default ActivatePlan;
