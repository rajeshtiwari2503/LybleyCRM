import React, { useState } from 'react'

import DashboardHeader from '../../common/dashboardHeader'
import httpCommon from '@/src/http-common';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ToastMessage from '../common/ToastMessage';

const AddBrand = () => {

    const [loading, setLoading] = useState(false);

    const handleRegistration = async (obj) => {
        try {
            setLoading(true)
            let creatData = {
                name: obj?.name, email: obj?.email, contact: +(obj?.contact), password: obj?.password
                , gstNo: obj?.gstNo, owner: obj?.owner, basePrice: +(obj?.basePrice), distanceLimitForBasePriceInKm: +(obj?.distanceLimitForBasePriceInKm), aboveBasePricePerKm: +(obj?.aboveBasePricePerKm)
                , allowSerialNumberGeneration: obj?.allowSerialNumberGeneration, website: obj?.website, landlineNo: +(obj?.landlineNo), addressLine1: obj?.addressLine1, addressLine2: obj?.addressLine2, landmark: obj?.landmark , zipCode: obj?.zipCode, listOfArea: obj?.listOfArea , locality: obj?.locality , city: obj?.city , district: obj?.district , state: obj?.state , companyName: obj?.companyName , panNumber: obj?.panNumber, agreementDate: obj?.agreementDate, perMonthAmount: +(obj?.permonthAmount), crm: obj?.crm , tollFree: obj?.tollFree , customerCare: obj?.customerCare , courierCharges: obj?.courierCharges, warehouseCharge: obj?.warehouseCharge , url: obj?.url , logo: obj?.logo , status: "logo"
            }

            let response = await httpCommon.post("/registration", creatData)
            let { data } = response

            setLoading(false)
            ToastMessage(data)
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            // ToastMessage(data)

        }
    }


    const validationSchema = Yup.object().shape({
        dropdownField: Yup.string().required('Please select an option from the dropdown.'),
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
        gstNo: Yup.string().required('Gst No. is required')
            .min(14, " Gst No. must be at least 14 characters"),
        owner: Yup.string().required(' Owner  Name is required')
            .min(4, "Owner Name must be at least 4 characters"),
        basePrice: Yup.string().required(' Base Price   is required'),
        distanceLimitForBasePriceInKm: Yup.string().required(' Distance Limit For Base Price In Km is required'),
        aboveBasePricePerKm: Yup.string().required(' Above Base Price Per Km  Name is required'),
        allowSerialNumberGeneration: Yup.string().required(' Allow Serial Number Generation is required'),
        website: Yup.string().required(' website is required')
            .min(4, "website must be at least 4 characters"),
        landlineNo: Yup.string().required('Landline No is required'),
        addressLine1: Yup.string().required(' Address Line1 is required'),
        addressLine2: Yup.string().required(' Address Line2 is required'),
        landmark: Yup.string().required(' Landmark is required'),
        zipCode: Yup.string().required(' Zip Code is required'),
        listOfArea: Yup.string().required(' List Of Area is required'),
        locality: Yup.string().required(' Locality is required'),
        city: Yup.string().required(' City is required'),
        district: Yup.string().required(' District is required'),
        state: Yup.string().required(' State is required'),
        companyName: Yup.string().required(' Company Name is required'),
        panNumber: Yup.string().required(' Pan Numberis required'),
        agreementDate: Yup.string().required(' Agreement Date required'),
        permonthAmount: Yup.string().required(' Permonth Amount is required'),
        crm: Yup.string().required(' CRM is required'),
        tollFree: Yup.string().required(' Toll Free is required'),
        customerCare: Yup.string().required(' Customer Care is required'),
        courierCharges: Yup.string().required(' Courier Charges is required'),
        warehouseCharge: Yup.string().required(' Warehouse Charge is required'),
        url: Yup.string().required(' URL is required'),
        logo: Yup.string().required(' Logo is required'),
        // status: Yup.string().required(' Status is required'),

    });
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onRegister = data => {
        handleRegistration(data)

    }
    return (
        <div className='bg-light p-0 m-0'>
            <DashboardHeader pagetitle={"Add Brand "}

            />

            {/* <h4 className='mt53'>Brands</h4> */}


            <div className="deadline-form">
                <form>
                    <div className="row g-3 mb-3  ">
                        <div className="col-sm-12 col-md-4 ">
                            <div>
                                <label className="form-label">Product Category</label>
                                <Controller
                                    name="dropdownField"
                                    control={control}
                                    defaultValue="" // Set the initial value for the dropdown if needed
                                    render={({ field }) => (
                                        <select className="form-select"{...field}>
                                            <option value="">Select  Product Category</option>
                                            <option value="option1">Electrical Appliances</option>
                                            <option value="option2">Electranic Home Appliances</option>
                                            <option value="option2">Kitchen Appliances</option>
                                            <option value="option2">Audio and Vedio</option>
                                            <option value="option2">Electric Vehicle</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    )}
                                />
                                <div className='text-danger'>
                                    {errors.dropdownField?.message}
                                </div>

                            </div>
                        </div>
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
                            <input type="text" className={(errors && errors.gstNo) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('gstNo')}

                            />
                            <div className='text-danger'>
                                {errors.gstNo?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Owner/MD/CEO Name</label>
                            <input type="text" className={(errors && errors.owner) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('owner')}

                            />
                            <div className='text-danger'>
                                {errors.owner?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Base Price</label>
                            <input type="text" className={(errors && errors.basePrice) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('basePrice')}

                            />
                            <div className='text-danger'>
                                {errors.basePrice?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Distance Limit for Base Price (in Km)</label>
                            <input type="text" className={(errors && errors.distanceLimitForBasePriceInKm) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('distanceLimitForBasePriceInKm')}

                            />
                            <div className='text-danger'>
                                {errors.distanceLimitForBasePriceInKm?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Above Base Price per km</label>
                            <input type="text" className={(errors && errors.aboveBasePricePerKm) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('aboveBasePricePerKm')}

                            />
                            <div className='text-danger'>
                                {errors.aboveBasePricePerKm?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Allow Serial Number Generation</label>
                            <input type="text" className={(errors && errors.allowSerialNumberGeneration) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('allowSerialNumberGeneration')}

                            />
                            <div className='text-danger'>
                                {errors.allowSerialNumberGeneration?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Website</label>
                            <input type="text" className={(errors && errors.website) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('website')}

                            />
                            <div className='text-danger'>
                                {errors.website?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Landline No</label>
                            <input type="text" className={(errors && errors.landlineNo) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('landlineNo')}

                            />
                            <div className='text-danger'>
                                {errors.landlineNo?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Address Line1</label>
                            <input type="text" className={(errors && errors.addressLine1) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('addressLine1')}

                            />
                            <div className='text-danger'>
                                {errors.addressLine1?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Address Line2</label>
                            <input type="text" className={(errors && errors.addressLine2) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('addressLine2')}

                            />
                            <div className='text-danger'>
                                {errors.addressLine2?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Landmark</label>
                            <input type="text" className={(errors && errors.landmark) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('landmark')}

                            />
                            <div className='text-danger'>
                                {errors.landmark?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Zip Code</label>
                            <input type="text" className={(errors && errors.zipCode) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('zipCode')}

                            />
                            <div className='text-danger'>
                                {errors.zipCode?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">List Of Area</label>
                            <input type="text" className={(errors && errors.listOfArea) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('listOfArea')}

                            />
                            <div className='text-danger'>
                                {errors.listOfArea?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Locality</label>
                            <input type="text" className={(errors && errors.locality) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('locality')}

                            />
                            <div className='text-danger'>
                                {errors.locality?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">City</label>
                            <input type="text" className={(errors && errors.city) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('city')}

                            />
                            <div className='text-danger'>
                                {errors.city?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">District</label>
                            <input type="text" className={(errors && errors.district) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('district')}

                            />
                            <div className='text-danger'>
                                {errors.district?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">State</label>
                            <input type="text" className={(errors && errors.state) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('state')}

                            />
                            <div className='text-danger'>
                                {errors.state?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Company Name</label>
                            <input type="text" className={(errors && errors.companyName) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('companyName')}

                            />
                            <div className='text-danger'>
                                {errors.companyName?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Pan Number</label>
                            <input type="text" className={(errors && errors.panNumber) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('panNumber')}

                            />
                            <div className='text-danger'>
                                {errors.panNumber?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Agreement Date</label>
                            <input type="text" className={(errors && errors.agreementDate) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('agreementDate')}

                            />
                            <div className='text-danger'>
                                {errors.agreementDate?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Permonth Amount</label>
                            <input type="text" className={(errors && errors.permonthAmount) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('permonthAmount')}

                            />
                            <div className='text-danger'>
                                {errors.permonthAmount?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div>
                                <label className="form-label">CRM</label>
                                <Controller
                                    name="crm"
                                    control={control}
                                    defaultValue="" // Set the initial value for the dropdown if needed
                                    render={({ field }) => (
                                        <select className="form-select"{...field}>
                                            <option value="">Select </option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>

                                            {/* Add more options as needed */}
                                        </select>
                                    )}
                                />
                                <div className='text-danger'>
                                    {errors.crm?.message}
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div>
                                <label className="form-label">Toll Free</label>
                                <Controller
                                    name="tollFree"
                                    control={control}
                                    defaultValue="" // Set the initial value for the dropdown if needed
                                    render={({ field }) => (
                                        <select className="form-select"{...field}>
                                            <option value="">Select </option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>

                                            {/* Add more options as needed */}
                                        </select>
                                    )}
                                />
                                <div className='text-danger'>
                                    {errors.tollFree?.message}
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <div>
                                <label className="form-label">Customer Care</label>
                                <Controller
                                    name="customerCare"
                                    control={control}
                                    defaultValue="" // Set the initial value for the dropdown if needed
                                    render={({ field }) => (
                                        <select className="form-select"{...field}>
                                            <option value="">Select </option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>

                                            {/* Add more options as needed */}
                                        </select>
                                    )}
                                />
                                <div className='text-danger'>
                                    {errors.customerCare?.message}
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Courier Charges</label>
                            <input type="text" className={(errors && errors.courierCharges) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('courierCharges')}

                            />
                            <div className='text-danger'>
                                {errors.courierCharges?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">

                            <div>
                                <label className="form-label">Warehouse Charge</label>
                                <Controller
                                    name="warehouseCharge"
                                    control={control}
                                    defaultValue="" // Set the initial value for the dropdown if needed
                                    render={({ field }) => (
                                        <select className="form-select"{...field}>
                                            <option value="">Select </option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>

                                            {/* Add more options as needed */}
                                        </select>
                                    )}
                                />
                                <div className='text-danger'>
                                    {errors.warehouseCharge?.message}
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Designation</label>
                            <input type="text" className={(errors && errors.designation) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('designation')}

                            />
                            <div className='text-danger'>
                                {errors.designation?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">URL</label>
                            <input type="text" className={(errors && errors.url) ? "form-control   border-danger " : "form-control  "} id="item"
                                {...register('url')}

                            />
                            <div className='text-danger'>
                                {errors.url?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 ">
                            <label htmlFor="item" className="form-label">Logo</label>

                            <Controller
                                name="logo"
                                control={control}
                                render={({ field }) => (
                                    <input className="form-control" type="file" multiple {...field} />
                                )}
                            />
                            <div className='text-danger'>
                                {errors.logo?.message}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4  ">
                            <Controller
                                name="status"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Please select an option' }}
                                render={({ field }) => (
                                    <div>
                                        <label htmlFor="item" className="form-label mt-4">Status</label>
                                        <label>
                                            <input className="form-label m-3" type="radio" value="Yes" {...field} />
                                            Yes
                                        </label>
                                        <label  >
                                            <input className="form-label m-3" type="radio" value="No" {...field} />
                                            No
                                        </label>

                                    </div>

                                )}
                            />
                            {/* <div className='text-danger'>
                                {errors.status?.message}
                            </div> */}
                        </div>
                    </div>
                </form>
            </div>


            <div>

                <button type="submit" disabled={loading} className="btn btn-primary mb-3" onClick={handleSubmit(onRegister)}>{loading ? "Adding..." : "Add"}</button>
            </div>



        </div>
    )
}

export default AddBrand