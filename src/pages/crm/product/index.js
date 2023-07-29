import React from 'react'
import DashboardHeader from '../../common/dashboardHeader'
import Link from 'next/link'

const Product = () => {
  return (
    <div> 
         <DashboardHeader pagetitle={"Add Product"}
                modalbutton={() => {
                    return <div className="col-auto d-flex w-sm-100">
                        <Link href={"/crm/product/AddProduct"} className='text-decoration-none'>
                            <button type="button" className="btn btn-primary btn-set-task w-sm-100"  ><i className="icofont-plus-circle me-2 fs-6"></i>Add Product</button>
                        </Link>
                    </div>
                }} />
    </div>
  )
}

export default Product