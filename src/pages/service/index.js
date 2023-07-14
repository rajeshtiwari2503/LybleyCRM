import React from 'react'

const dArray = [
    {
        id: "1",
        imageName: "dddddd"
    },
    {
        id: "2",
        imageName: "dddddd"
    },
    {
        id: "3",
        imageName: "dddddd"
    },
    {
        id: "4",
        imageName: "dddddd"
    },
    {
        id: "5",
        imageName: "dddddd"
    },
    {
        id: "6",
        imageName: "dddddd"
    },
    {
        id: "7",
        imageName: "dddddd"
    },
    {
        id: "8",
        imageName: "dddddd"
    }
]
const Services = () => {
    return (
        <div className='mt-5  '>
            <div className='text-center'><h2>Our Services</h2></div>
            <div>
                <div className='row w-100  '>
                  {dArray?.map((item,i)=>  <div   className='mb-3  col-6 col-md-4 col-lg-3' key={i}>
                    <div className='text-center'>
                    <div>{item?.id}</div>
                    <img className='p-3 img-fluid rounded'  src='https://w7.pngwing.com/pngs/193/143/png-transparent-software-development-computer-software-web-service-fujitsu-our-services-text-service-public-relations-thumbnail.png'alt='service' height="150px"width="150px" />
                    <div className='text-center'>{item?.imageName}</div>
                  </div>
                  </div>
                  )}
                </div>
            </div>
        </div>
    )
} 

export default Services