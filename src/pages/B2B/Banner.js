import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InventoryIcon from '@mui/icons-material/Inventory';
import Carousels from '../common/Carousel';

const Banner = () => {
    return (
        <div>
            <div>
                {/* <img className='card-img-top' alt='' width="100%" height={590} src='https://e1.pxfuel.com/desktop-wallpaper/467/878/desktop-wallpaper-business-solutions-success-and-strategy-concept-business-plan.jpg' /> */}
                <Carousels />
            </div>
            <div style={{ backgroundColor: "#2b6777", height: "94px" }}>
                <div className='row text-white fw2-bold pt-4'>
                    <div className='col-12 col-md-3 col-lg-3 '>
                        <div className='d-flex align-items-center justify-content-center '>
                            <div><ManageAccountsIcon fontSize='large' /> </div>
                            <div className='ms-3'>
                                <div>1500 +</div>
                                <div>Service Center</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className='d-flex align-items-center'>
                            <div><HomeIcon fontSize='large' /> </div>
                            <div className='ms-3'>
                                <div>775 +</div>
                                <div>Towns Covered</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className='d-flex align-items-center'>
                            <div><InventoryIcon fontSize='large' /> </div>
                            <div className='ms-3'>
                                <div>4 +</div>
                                <div>Warehouse</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className='d-flex align-items-center'>
                            <div><BuildIcon fontSize='large' /> </div>
                            <div className='ms-3'>
                                <div>Comprehensive</div>
                                <div>CRM Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6 col-lg-6 '>
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
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='fw-bold fs-3 text-dark'>
                            Trusted by multiple leading Brands
                        </div>
                        <div className='mb-5'>
                            <img className='card-img-top mt-5' alt='' width="100%" height={200} src='https://www.shutterstock.com/shutterstock/photos/207668356/display_1500/stock-photo-brand-written-on-multiple-road-sign-207668356.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner