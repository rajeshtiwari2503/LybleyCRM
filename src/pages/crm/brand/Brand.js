import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DashboardHeader from '../../common/dashboardHeader'
import Link from 'next/link';
import httpCommon from '@/src/http-common';
import Loader from '../common/Loading';

const BrandPage = () => {

    const [loading, setLoading] = useState(false);
    const [getData, setGetData] = useState([]);


    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        try {
            setLoading(true)
            let response = await httpCommon.get("/getAllUser")
            let { data } = response;
            setGetData(data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    return (
        <div className='container11'>
            <DashboardHeader pagetitle={"Brand Dashboard"}
                modalbutton={() => {
                    return <div className="col-auto d-flex w-sm-100">
                        <Link href={"/crm/brand/AddBrand"} className='text-decoration-none'>
                            <button type="button" className="btn btn-primary btn-set-task w-sm-100"  ><i className="icofont-plus-circle me-2 fs-6"></i>Add Brand</button>
                        </Link>
                    </div>
                }} />

            {/* <h4 className='mt53'>Brands</h4> */}
            {loading ?<div className='text-center align-items-center '> <Loader /></div>
                :
                <div className="row ">
                    {getData && getData?.length > 0 ?
                        getData?.map((item, i) =>
                            <div key={i} className="col-6 fw-bold text-center  col-md-4 col-lg-3 mt-4  ">
                                <div className="card py-4 shadow dashhover "  >
                                    <Link className='text-decoration-none' href={"/crm/brand/BrandDetailts"}>
                                        <div className='text-dark'> {item?.name}</div>
                                        <div className=' mt-4'>
                                            <Image height={50} width={50} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )

                        : "No Data Available"
                    }


                </div>
            }
        </div>
    )
}

export default BrandPage