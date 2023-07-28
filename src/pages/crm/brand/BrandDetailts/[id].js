import React, { useEffect,useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DashboardHeader from '@/src/pages/common/dashboardHeader'
import httpCommon from '@/src/http-common'
 

const BrandDetailts = () => {
  const [brand,setBrand]=useState({});
  const router=useRouter();
  const {id}=router.query;
  console.log(brand);
  useEffect(()=>{
    getBrand();
  },[id]);

  const getBrand=async()=>{
       try{
        let response = await httpCommon.get(`/getUserBy/${id}`);
        let {data}=response;
        setBrand(data);
       }catch(err){
        console.log(err);
       }
  }
  return (
    <div>
   <DashboardHeader pagetitle={"Basic Details"}
                modalbutton={() => {
                    return <div className="col-auto d-flex w-sm-100">
                        <Link href={"/crm/brand/edit"} className='text-decoration-none'>
                            <button type="button" className="btn btn-warning btn-set-task w-sm-100"  ><i className="icofont-plus-circle me-2 fs-6"></i>Edit Brand</button>
                        </Link>
                    </div>
                }} />
      <div className="shadow p-3 bg-white rounded">
      <div className="row">
        <div className="col-6 col-md-3 col-lg-3">
          <h6 className='my-1'>Brand Name</h6>{brand?.name}
          </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Mobile Number</h6>{brand?.contact}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Email ID</h6>{brand?.email}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Landline Number</h6>
        {brand?.landlineNo}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 col-md-3 col-lg-3">
          <h6 className='my-1'>Website</h6>{brand?.website}
          </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Address Line 1</h6>{brand?.addressLine1}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Address Line 2</h6>{brand?.addressLine2}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Pincode</h6>
        {brand?.zipCode}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 col-md-3 col-lg-3">
          <h6 className='my-1'>State</h6>{brand?.state}
          </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>District</h6>{brand?.district}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>City</h6>{brand?.city}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Landmark</h6>
        {brand?.landmark}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 col-md-3 col-lg-3">
          <h6 className='my-1'>Is Active? </h6>{brand?.isActive}
          </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Joined US at</h6>{new Date(brand?.createdAt)?.toLocaleString()}

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Information Last Updated At</h6>
        {new Date(brand?.updatedAt)?.toLocaleString()}
        </div>
        <div className="col-6 col-md-3 col-lg-3">
        <h6 className='my-1'>Last Logged In At</h6>
        456789876
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 col-md-3 col-lg-3">
          <h6 className='my-1'>Password</h6>{brand?.password}
          </div>
        <div className="col-6 col-md-3 col-lg-3">

        </div>
        <div className="col-6 col-md-3 col-lg-3">
        </div>
        <div className="col-6 col-md-3 col-lg-3">
        </div>
      </div>
      </div>
    </div>
  )
}

export default BrandDetailts