import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Search from '../search';

const Blog = () => {
    return (
        <div>
            <div className='row'>
                <div className='fw-bold fs-2 text-center'>Handpicked Blogs on Water Purifier</div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div>
                        <div >
                            <img className=" m-3 img-fluid" alt='blog' width={400} height={400} src='https://onsitego-media.s3.amazonaws.com/blog/blog_images/ro-water-purifier-maintenance.jpg?w=750&q=75' />
                        </div>
                        <div className='mt-3 ms-3'>5 most problem </div>
                        <button className='btn text-warning'><u>ReadMore</u> <ArrowForwardIcon fontSize='small' /></button>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div>
                        <div >
                            <img className=" m-3 img-fluid" alt='blog' width={400} height={400} src='https://onsitego-media.s3.amazonaws.com/blog/blog_images/water-purifier-problem-and-solution.jpg?w=750&q=75' />
                        </div>
                        <div className='mt-3 ms-3'>5 most problem </div>
                        <button className='btn text-warning'><u>ReadMore</u> <ArrowForwardIcon fontSize='small' /></button>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div>
                        <div >
                            <img className=" m-3 img-fluid" alt='blog' width={400} height={400} src='https://onsitego-media.s3.amazonaws.com/blog/blog_images/uv-water-purifier-maintenance.jpg?w=750&q=75' />
                        </div>
                        <div className='mt-3 ms-3'>5 most problem </div>
                        <button className='btn text-warning'><u>ReadMore</u> <ArrowForwardIcon fontSize='small' /></button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-md-3 col-lg-3'>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div>
                        <div className='mt-3 fw-bold fs-3 mb-3 text-center'>Not Sure What You’re Looking for? </div>
                        <div className='mt-3 fw-bold fs-5 mb-3 text-center'>Get started by selecting an appliance and we’ll help you! </div>
                        <Search  />
                    </div>
                </div>
                <div className='col-12 col-md-3 col-lg-3'>
                </div>

            </div>
        </div>
    )
}

export default Blog