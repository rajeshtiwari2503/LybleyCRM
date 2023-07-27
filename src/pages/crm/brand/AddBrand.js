import React, { useState } from 'react'

import DashboardHeader from '../../common/dashboardHeader'
import httpCommon from '@/src/http-common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const AddBrand = () => {
     
    const [loading, setLoading] = useState(false);

    const handleRegistration = async (obj) => {
        try {
            setLoading(true)
            let creatData = { name: obj?.name, email: obj?.email, contact: +(obj?.contact), password: obj?.password }
            
            let response = await httpCommon.post("/registration", creatData)
            let { data } = response
          
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
        <div className='container'>
            <DashboardHeader pagetitle={"Add Brand "}
                
                />

            {/* <h4 className='mt53'>Brands</h4> */}
            
            
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3  ">
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Brand Name</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Brand Email</label>
                                    <input type="email" className={(errors && errors.email) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('email')}

                                    />
                                    <div className='text-danger'>
                                        {errors.email?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Contact No.</label>
                                    <input type="number" className={(errors && errors.contact) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('contact')}

                                    />
                                    <div className='text-danger'>
                                        {errors.contact?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Password</label>
                                    <input type="password" className={(errors && errors.password) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('password')}

                                    />
                                    <div className='text-danger'>
                                        {errors.password?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Confirm Password</label>
                                    <input type="password" className={(errors && errors.cPassword) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('cPassword')}

                                    />
                                    <div className='text-danger'>
                                        {errors.cPassword?.message}
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">GST No.</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Owner/MD/CEO Name</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Base Price</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Distance Limit for Base Price (in Km)</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Above Base Price per km</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Allow Serial Number Generation</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Website</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Landline No</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Address Line1</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Address Line2</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Landmark</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Zip Code</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">List Of Area</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Locality</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">City</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">District</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">State</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Company Name</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Pan Number</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Agreement Date</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Permonth Amount</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">CRM</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Toll Free</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Customer Care</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Courier Charges</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Warehouse Charge</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Designation</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">URL</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Logo</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 ">
                                    <label htmlFor="item" className="form-label">Status</label>
                                    <input type="text" className={(errors && errors.name) ? "form-control   border-danger " : "form-control  "} id="item"
                                        {...register('name')}

                                    />
                                    <div className='text-danger'>
                                        {errors.name?.message}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

           
                <div>
                   
                    <button type="submit" disabled={loading} className="btn btn-primary"onClick= {handleSubmit(onRegister)}>{loading ? "Adding..." : "Add"}</button>
                </div>

           

        </div>
  )
}

export default AddBrand