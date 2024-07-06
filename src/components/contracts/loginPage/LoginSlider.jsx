import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../../images/login1.png';
import img2 from '../../../images/login2.png';

const LoginSlider = () => {
    return (
        <div className='login-swiper'>
            <Swiper
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="loginSwiper"
            >
                <SwiperSlide>
                    <div className="login-swiper-container">
                        <div className="text">
                            <p>Подписание документов</p>
                            <span>Здесь нужно написать описательный текст о том,
                                как удобно пользоваться нашим личным кабинетом.</span>
                        </div>
                        <div className="image">
                            <img src={img1} alt="login-page-img"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="login-swiper-container">
                        <div className="text">
                            <p>Управление аккаунтом</p>
                            <span>Здесь нужно написать описательный текст о том,
                                как удобно управлять своим аккаунтом.</span>
                        </div>
                        <div className="image">
                            <img src={img2} alt="login-page-img"/>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default LoginSlider;
