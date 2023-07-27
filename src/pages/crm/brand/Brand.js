import Image from 'next/image'
import React, { useState } from 'react'
import DashboardHeader from '../../common/dashboardHeader'
import { Modal } from 'react-bootstrap';
import Link from 'next/link';
import httpCommon from '@/src/http-common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const BrandPage = () => {
    const [ismodal, setIsmodal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegistration = async (obj) => {
        try {
            setLoading(true)
            let creatData = { name: obj?.name, email: obj?.email, contact: +(obj?.contact), password: obj?.password }
            
            let response = await httpCommon.post("/registration", creatData)
            let { data } = response
            setIsmodal(false)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            console.log(err)
        }
    }


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('   Name is required')
            .min(4, " Name must be at least 4 characters"),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        contact: Yup.string()
            .required('Contact No. is required')
            .min(10, 'Contact No. must be at least 10 characters')
            .max(10, 'Contact No. must not exceed 10 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        cPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onRegister = data => {
        handleRegistration(data)

    }
    return (
        <div className='container11'>
            <DashboardHeader pagetitle={"Brand Dashboard"}
                modalbutton={() => {
                    return <div className="col-auto d-flex w-sm-100">
                       <Link href={"/crm/brand/AddBrand"} className='text-decoration-none'>
                        <button type="button"   className="btn btn-primary btn-set-task w-sm-100"  ><i className="icofont-plus-circle me-2 fs-6"></i>Add Brand</button>
                       </Link> 
                    </div>
                }} />

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
                            <Image height={60} width={60} alt='brand' src="https://media.licdn.com/dms/image/C4E0BAQEWmLbx4LlRHA/company-logo_200_200/0/1596941842942?e=2147483647&v=beta&t=U8ts_81bWWo_G5-jzlYTrhMqnwJUJv6vrBPi2LKAWqI" />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default BrandPage