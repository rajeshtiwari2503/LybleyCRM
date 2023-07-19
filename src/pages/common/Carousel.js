import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-bootstrap/Carousel'  
import style from "./common.module.css"

const Carousels = () => {
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //       // Code inside this block will only run on the client-side
    //       $('.carousel').carousel();
    //     }
    //   }, []);
    return (
        <>
        {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img src="https://scontent.fdel1-6.fna.fbcdn.net/v/t31.18172-8/28828537_889583511166302_8995353857013764602_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aanfZaw5upUAX-KBUYV&_nc_ht=scontent.fdel1-6.fna&oh=00_AfD9qrGP5Xkn58ndzEuAFP-8JuQwhCffndabOwJrp_Ucfw&oe=64D88891" className="d-block w-100" height="350px" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.tjservice.in/wp-content/uploads/2022/06/slide1.jpg" className="d-block w-100" height="350px" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.dghelp.com/wp-content/uploads/2021/08/Samsung_2000x600-HA-banners-150821-.jpg" className="d-block w-100" height="350px" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div>   */}

                         <div >  
                         <Carousel>  
                         <Carousel.Item > 
                         <img 
                         className={`${style.imgBannerHeight} d-block w-100}`}
                        src={'https://www.tjservice.in/wp-content/uploads/2022/06/slide1.jpg'}  />
                           <Carousel.Caption>  
                             {/* <h3>First Demo </h3>   */}
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item>  
                                 <img 
                                   className={`${style.imgBannerHeight} d-block w-100}`} 
                                    src={'https://www.dghelp.com/wp-content/uploads/2021/08/Samsung_2000x600-HA-banners-150821-.jpg'}    />  
                                       <Carousel.Caption>  
                                   {/* <h3>Second Demo</h3>   */}
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item>  
                                       <img 
                                        className={`${style.imgBannerHeight} d-block w-100}`}
                                         src={'https://scontent.fdel1-6.fna.fbcdn.net/v/t31.18172-8/28828537_889583511166302_8995353857013764602_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aanfZaw5upUAX-KBUYV&_nc_ht=scontent.fdel1-6.fna&oh=00_AfD9qrGP5Xkn58ndzEuAFP-8JuQwhCffndabOwJrp_Ucfw&oe=64D88891'}   />  
                                        <Carousel.Caption>  
                                          {/* <h3>Third Demo</h3>   */}
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                         
      </>
    )
}

export default Carousels;