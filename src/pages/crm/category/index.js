import React from 'react'
import DashboardHeader from '../../common/dashboardHeader'
import Link from 'next/link'

const ProductCategory = () => {
  return (
    <div> 
    <DashboardHeader pagetitle={"Add Product Category"}
           modalbutton={() => {
               return <div className="col-auto d-flex w-sm-100">
                   <Link href={"/crm/product/AddProductCategory"} className='text-decoration-none'>
                       <button type="button" className="btn btn-primary btn-set-task w-sm-100"  ><i className="icofont-plus-circle me-2 fs-6"></i>Add  Category</button>
                   </Link>
               </div>
           }} />
</div>
  )
}

export default ProductCategory