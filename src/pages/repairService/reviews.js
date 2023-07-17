import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
const Reviews = () => {
    return (
        <div className='container mt-5'>
            <p className='text-info text-center'>READ CUSTOMER REVIEWS</p>
            <h1 className='text-center'>For Refrigerator Repairs & Servicing in Delhi</h1>
            <p className='text-center'>Here's what our customers say about us.</p>
            <div className='row pt-3'>
                {[1, 2, 3, 4].map(m1 =>
                    <div className='col-12 col-md-6 col-lg-6  d-flex justify-content-center'>
                        <div className="card border-0 mb-3" style={{ width: "600px" }}>
                            <div className="row shadow rounded bg-body border-0 g-0">
                                <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                                    <div >
                                        <img src="https://thumb9.shutterstock.com/image-photo/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-250nw-1714666150.jpg" height="60px" width="60px" className="rounded-circle" alt="..." />
                                    </div>
                                    <div>
                                        <h6 className='mb-0 py-1'>Rahul Gupta</h6>
                                    </div>
                                    <div>
                                        <small>Delhi</small>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title d-flex align-items-center"> <div className='me-2'>4</div> <StarRateIcon color='warning' /> <StarRateIcon color='warning' /> <StarRateIcon color='warning' /> <StarRateIcon color='warning' /> </h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>
            <p className='text-primary text-center'>Read More...</p>
        </div>
    )
}

export default Reviews;