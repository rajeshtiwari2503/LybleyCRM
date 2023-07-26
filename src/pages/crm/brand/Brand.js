import Image from 'next/image'
import React, { useState } from 'react'
import DashboardHeader from '../../common/dashboardHeader'
import { Modal } from 'react-bootstrap';
import Link from 'next/link';

const BrandPage = () => {
    const [ismodal, setIsmodal] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='container'>
            <DashboardHeader pagetitle={"Brand Dashboard"} 
            modalbutton={() => {
                return <div className="col-auto d-flex w-sm-100">
                    <button type="button" onClick={() => { setIsmodal(true) }} className="btn btn-primary btn-set-task w-sm-100"  ><i className="icofont-plus-circle me-2 fs-6"></i>Add Fault</button>
                </div>
            }}/>
            
            {/* <h4 className='mt53'>Brands</h4> */}
            <div className="row ">
                <div className="col-6 fw-bold text-center  col-md-4 col-lg-3    mt-4  ">
                    <div className="card py-4 shadow dashhover "  >
                        <Link className='text-decoration-none' href={"/crm/brand/BrandDetailts"}>
                        <div className='text-dark'> SUPPERCOOL</div>
                        <div className=' mt-4'>
                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                        </Link>
                    </div>
                </div>
                
                <div className="col-6 fw-bold text-center  col-md-4 col-lg-3    mt-4  ">
                    <div className="card py-4 shadow dashhover">
                        <div> SAMSUNG</div>
                        <div className=' mt-4'>
                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                    </div>
               
                </div>
                <div className="col-6 fw-bold text-center  col-md-4 col-lg-3    mt-4  ">
                    <div className="card py-4 shadow  dashhover">
                        <div> LYBLEY</div>
                        <div className=' mt-4'>
                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                    </div>
                </div>
                <div className="col-6 fw-bold text-center  col-md-4 col-lg-3    mt-4  ">
                    <div className="card py-4 shadow  dashhover">
                        <div> NOVAMAX</div>
                        <div className=' mt-4'>
                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                    </div>
                </div>
                <div className="col-6 fw-bold text-center  col-md-4 col-lg-3    mt-4 ">
                    <div className="card py-4 shadow  dashhover ">
                        <div> VOLTAS</div>
                        <div className=' mt-4'>
                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                    </div>
                </div>
                <div className="col-6 fw-bold text-center  col-md-4 col-lg-3    mt-4 ">
                    <div className="card py-4 shadow dashhover "  >
                        <div> LG</div>
                        <div className=' mt-4'>
                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={ismodal} style={{ display: 'block' }}>
                <Modal.Header className="modal-header" onClick={() => { setIsmodal(false) }} closeButton>
                    <h5 className="modal-title  fw-bold" id="expaddLabel">Add Brand</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3  ">
                                <div className="col-sm-12 ">
                                    <label htmlFor="item" className="form-label">Brand Name</label>
                                    <input type="text" className="form-control" id="item"   />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="item" className="form-label">Brand Email</label>
                                    <input type="text" className="form-control" id="item"   />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="item" className="form-label">Contact No.</label>
                                    <input type="text" className="form-control" id="item"   />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="item" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="item"   />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="item" className="form-label">Pin</label>
                                    <input type="text" className="form-control" id="item"   />
                                </div>
                            </div>
                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button onClick={() => { setIsmodal(false) }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" disabled={loading} className="btn btn-primary"  >{loading ? "Adding..." : "Add"}</button>
                </Modal.Footer>

            </Modal>
            
        </div>
    )
}

export default BrandPage