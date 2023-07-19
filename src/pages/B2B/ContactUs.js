import React from 'react'
import style from "./b2b.module.css"
import { FilledInput, InputAdornment, TextField } from '@mui/material'

const ContactUs = () => {
    return (
        <>
            <div className={`${style.contactHead} mt-3 mb-3`}>
                <div className={`${style.contactBody} mt-3 mb-3 rounded-5`} >
                    <div className='pt-3 ps-5 pe-5'>
                        <div className='  fs-3 text-primary text-center'>Contact Us</div>
                        <div className='d-flex'>
                        <div className='mt-3 mb-3'>
                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='Name'
                                aria-describedby="filled-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div>
                        <div className='mt-3 mb-3 ms-1 me-1'>
                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='Email Address'
                                aria-describedby="filled-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div>
                        <div className='mt-3 mb-3'>
                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='Contact No.'
                                aria-describedby="filled-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div>
                        </div>
                        <div className='d-flex'>
                        <div className='mt-2 mb-3'>
                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='Designation'
                                aria-describedby="filled-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div><div className='mt-2 mb-3 ms-1 me-1'>
                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='Company'
                                aria-describedby="filled-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div><div className='mt-2 mb-3'>
                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='City'
                                aria-describedby="filled-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div>
                        </div>
                        <div className=' d-flex justify-content-center mt-2'>
                            <div className='btn btn-primary'>Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs