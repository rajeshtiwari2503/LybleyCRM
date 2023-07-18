import React from 'react'
import style from "../repairService/repair.module.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Plan = () => {
    return (
        <>
            <div className={style.planWd}>
                <div className={style.bg_black}>
                    <div className={`shadow bg-body ${style.popUp}`}>
                        <div className="row  w-100 m-0">
                            <div className="col-12  col-md-6 col-lg-6">
                                <div className=' m-5 pb-5 border rounded-4 shadow  text-center'>
                                    <h1 className='mt-5  '>HomeCare Premium</h1>
                                    <div>
                                        <img alt='' width={200} height={200} src='https://d2js0267gg4oqb.cloudfront.net/static/images/features/homecare_features/homecare-premium.png?w=256&q=75' />
                                    </div>
                                    <div className='mt-3   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div><div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='text-center fw-bold mt-3'>Need a quote?</div>
                                    <button className='fw-bold my-3   btn btn-warning rounded-pill px-5 py-2'><div className='m-0 fw-bold  '>REQUEST A CALLBACK</div></button>

                                </div>
                            </div>
                            <div className={`col-12 col-md-6 col-lg-6   ${style.second_col}`}>    
                            <div className=' m-5 pb-5 border rounded-4 shadow  text-center'>
                                    <h1 className='mt-5  '>HomeCare Basic</h1>
                                    <div>
                                        <img alt='' width={200} height={200} src='https://d2js0267gg4oqb.cloudfront.net/static/images/features/homecare_features/homecare-premium.png?w=256&q=75' />
                                    </div>
                                    <div className='mt-3   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div><div className='mt-4   text-muted'><CheckCircleIcon color='success' /> Lorem ipsum dolor sit amet consectetur adipisicing.
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                    <div className='text-center fw-bold mt-3'>₹1,999 </div><span className='mt-3'> &nbsp;/ year</span> 
                                    </div>
                                     <button className='fw-bold my-3   btn btn-warning rounded-pill px-5 py-2'><div className='m-0 fw-bold  '>   BUY NOW</div></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Plan;