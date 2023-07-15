import React from 'react'

const dArray = [
    {
        id: "1",
        imageName: "Refrigerator",
        imageLogo:"https://images.samsung.com/is/image/samsung/p6pim/in/rs7hcg8543b1hl/gallery/in-side-by-side-family-hub-449420-rs7hcg8543b1hl-535087575?$650_519_PNG$"
    },
    {
        id: "2",
        imageName: "Washing Machine",
        imageLogo:"https://www.lg.com/in/images/washing-machines/md07544601/gallery/FHM1065SDW-Washing-Machines-Front-View-D-01.jpg"
    },
    {
        id: "3",
        imageName: "Mixer Grinder",
        imageLogo:"https://cpimg.tistatic.com/08043724/b/4/HAVELLS-Aspro-500W-Mixer-Grinder.jpg"
    },
    {
        id: "4",
        imageName: "Air Cooler",
        imageLogo:"https://static1.industrybuying.com/products/electrical/electrical-appliances/air-coolers/ELE.COO.52422658_1668580814123.webp"
    },
    {
        id: "5",
        imageName: "Washing Machine",
        imageLogo:"https://www.lg.com/in/images/washing-machines/md07544601/gallery/FHM1065SDW-Washing-Machines-Front-View-D-01.jpg"
    },
    {
        id: "6",
        imageName: "Refrigerator",
        imageLogo:"https://images.samsung.com/is/image/samsung/p6pim/in/rs7hcg8543b1hl/gallery/in-side-by-side-family-hub-449420-rs7hcg8543b1hl-535087575?$650_519_PNG$"
    },
    {
        id: "7",
        imageName: "Air Cooler",
        imageLogo:"https://static1.industrybuying.com/products/electrical/electrical-appliances/air-coolers/ELE.COO.52422658_1668580814123.webp"
    },
    {
        id: "8",
        imageName: "Washing Machine",
        imageLogo:"https://www.lg.com/in/images/washing-machines/md07544601/gallery/FHM1065SDW-Washing-Machines-Front-View-D-01.jpg"
    }
]
const Services = () => {
    return (
        <div className='mt-5' style={{fontFamily:"san-serif"}}>
            <div className='text-center fw-bold' ><h2>Our Services</h2></div>
            <div className='mt-5'>
                <div className='row w-100'>
                  {dArray?.map((item,i)=>  <div   className='mb-3 col-6 col-md-4 col-lg-3' key={i}>
                    <div className='text-center'>
                    {/* <div>{item?.id}</div> */}
                    <img className='card-img-top rounded-circle'  src={item?.imageLogo} alt='service' style={{height:"110px",width:"150px"}} />
                    <div className='text-center mt-2'>{item?.imageName}</div>
                  </div>
                  </div>
                  )}
                </div>
            </div>
        </div>
    )
} 

export default Services