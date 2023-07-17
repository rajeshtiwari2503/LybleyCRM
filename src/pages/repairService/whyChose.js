import React from 'react'

const WhyChose = () => {
  return (
    <>
    <div className='bg-light py-3' style={{fontFamily:"san-serif"}}>
            <div className='text-center fw-bold' ><h2 className='fw-bold'>Why Chose Lybley</h2></div>
           
                <div className='row mt-5 '>
                    <div   className='mb-3 col-6 col-md-4 col-lg-4' >
                     <div className='text-center'>
                    {/* <div>{item?.id}</div> */}
                    <img className='card-img-top rounded-circle'  src="https://d2js0267gg4oqb.cloudfront.net/static/images/features/our_promise_banner/icons-qualified-engineers.svg?w=1920&q=75" alt='service' style={{height:"110px",width:"150px"}} />
                    <div className='text-center fw-bold fs-5  mt-2'>Qualified Engineers</div>
                    <div className='text-center  mt-2'>In house engineers with 10+ years of experience</div>
                  </div> 
                  </div>
                  <div   className='mb-3 col-6 col-md-4 col-lg-4' >
                     <div className='text-center'>
                    {/* <div>{item?.id}</div> */}
                    <img className='card-img-top rounded-circle'  src="https://d2js0267gg4oqb.cloudfront.net/static/images/features/our_promise_banner/icons-high-quality-repair.svg?w=1920&q=75" alt='service' style={{height:"110px",width:"150px"}} />
                    <div className='text-center fw-bold fs-5 mt-2'>High Quality Repairs</div>
                    <div className='text-center mt-2'>High quality spare parts</div>
                  </div> 
                  </div>
                  <div   className='mb-3 col-6 col-md-4 col-lg-4' >
                     <div className='text-center'>
                    {/* <div>{item?.id}</div> */}
                    <img className='card-img-top rounded-circle'  src="https://d2js0267gg4oqb.cloudfront.net/static/images/features/our_promise_banner/service-expertise.svg?w=1920&q=75" alt='service' style={{height:"110px",width:"150px"}} />
                    <div className='text-center fw-bold fs-5  mt-2'>Service Expertise</div>
                    <div className='text-center mt-2'>Trusted by 80+ lakh customers</div>
                  </div> 
                  </div>
             
                </div>
             
        </div></>
  )
}

export default WhyChose