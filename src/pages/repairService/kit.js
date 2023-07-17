import React from 'react'
 

const Kit = () => {
    return (
        <div className='container'>
            <div className='row w-100 mb-5'>
                <div className='fw-bold fs-2 text-center'>Repure Kit</div>
                <div className='  fs-5 text-center'>Best in class water purifier filters and membranes to ensure clean and healthy water</div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div>
                        <div >
                            <img className=" m-3 img-fluid" alt='blog' width={500} height={500} src='https://d2js0267gg4oqb.cloudfront.net/static/images/AMCWaterPurifier/ro.png?w=750&q=75s' />
                        </div>
                        <div className='mt-3 ms-3 fw-bold fs-4'>RO REPURE KIT</div>
                        <div className='ms-3 text-muted fw-bold'>Contains a Dupont FilmTec RO Membrane - World’s most trusted RO membrane, imported from the USA along with Sediment Filter, Pre-Carbon Filter & Post-Carbon Filter</div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div>
                        <div >
                            <img className=" m-3 img-fluid" alt='blog' width={500} height={500} src='https://d2js0267gg4oqb.cloudfront.net/static/images/AMCWaterPurifier/uv.png?w=750&q=75' />
                        </div>
                        <div className='mt-3 ms-3 fw-bold fs-4'>UV REPURE KIT</div>
                         <div className='text-muted ms-3 fw-bold'>Contains Sediment Filter & Pre-Carbon Filter</div>
                    </div>
                </div>
               
            </div>
             
        </div>
    )
}

export default Kit