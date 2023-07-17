import React from 'react'
import style from "./repair.module.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Service = () => {
    return (
        <>
            <div className={style.wd}>
                <div className={style.bg_black}>
                    <div className={`shadow bg-body ${style.popUp}`}>
                        <div className="row w-100 m-0">
                            <div className="col-12 col-md-6 col-lg-6">
                                <h1 className='mt-5 ms-5'>Refrigerator Repair and Servicing</h1>
                                <h4 className='mt-5 ms-5 text-muted'><CheckCircleIcon color='primary' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h4>
                                <h4 className='mt-4 ms-5 text-muted'><CheckCircleIcon color='primary' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h4>
                                <h4 className='mt-4 ms-5 text-muted'><CheckCircleIcon color='primary' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h4>
                                <h4 className='mt-4 ms-5 text-muted'><CheckCircleIcon color='primary' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h4><h4 className='mt-4 ms-5 text-muted'><CheckCircleIcon color='primary' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                </h4>
                                <p className='mt-5 ms-5 text-muted'>
                                    We offer Refrigerator services in many areas in Delhi NCR. <br /> <a href="" className='text-muted'>Check Popular Localities</a>
                                </p>
                                <p className='mt-3 ms-5 text-muted'>
                                    Have questions on your mind? <a href="" className='text-muted'> Read The FAQs</a>
                                </p>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-6 bg-light ${style.second_col}`}>
                                <h1 className='mt-5 ms-5'>Refrigerator Repair Services</h1>
                                <div className="row mt-5 ms-5 bg-white w-75 m-0 border border-2 rounded">
                                    <div className="col-12 col-md-7 col-lg-7 p-2">
                                        <h6> Refrigerator Repair</h6>
                                        <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero sequi commodi perspiciatis, iure distinctio.</small>
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-4 mb-3 mb-md-0 border-start d-flex justify-content-around align-items-center">
                                        <h5>300</h5> <div><button className='btn btn-outline-primary btn-sm'>Add<sup>+</sup></button></div>
                                    </div>
                                    <div className="col-1 bg-light"></div>
                                </div>
                                <div className="row mt-5 ms-5 bg-white w-75 m-0 border border-2 rounded">
                                    <div className="col-12 col-md-7 col-lg-7 p-2">
                                        <h6> Refrigerator Repair</h6>
                                        <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero sequi commodi perspiciatis, iure distinctio.</small>
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-4 mb-3 mb-md-0 border-start d-flex justify-content-around align-items-center">
                                        <h5>300</h5> <div><button className='btn btn-outline-primary btn-sm'>Add<sup>+</sup></button></div>
                                    </div>
                                    <div className="col-1 bg-light"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service;