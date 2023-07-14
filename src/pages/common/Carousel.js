import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://scontent.fdel1-6.fna.fbcdn.net/v/t31.18172-8/28828537_889583511166302_8995353857013764602_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aanfZaw5upUAX-KBUYV&_nc_ht=scontent.fdel1-6.fna&oh=00_AfD9qrGP5Xkn58ndzEuAFP-8JuQwhCffndabOwJrp_Ucfw&oe=64D88891" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.tjservice.in/wp-content/uploads/2022/06/slide1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.dghelp.com/wp-content/uploads/2021/08/Samsung_2000x600-HA-banners-150821-.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;