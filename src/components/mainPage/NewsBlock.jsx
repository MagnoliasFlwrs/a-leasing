import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsImg from '../../images/newsimg.png'

// install Swiper modules
SwiperCore.use([Navigation]);

const NewsBlock = () => {
    useEffect(() => {
        const updateNavigationVisibility = () => {
            const arrows = document.querySelectorAll('.arrows');
            const arrowsMobile = document.querySelectorAll('.arrows-mobile');
            arrows.forEach(arrow => {
                if (window.innerWidth > 745) {
                    arrow.style.display = 'flex';
                } else {
                    arrow.style.display = 'none';
                }
            });
            arrowsMobile.forEach(arrow => {
                if (window.innerWidth < 745) {
                    arrow.style.display = 'flex';
                } else {
                    arrow.style.display = 'none';
                }
            });
        };

        updateNavigationVisibility();
        window.addEventListener('resize', updateNavigationVisibility);

        return () => {
            window.removeEventListener('resize', updateNavigationVisibility);
        };
    }, []);

    return (
        <div className='news-block'>
            <div className="title-row">
                <h2>Новости компании</h2>
                <div className="arrows" style={{ display: window.innerWidth > 745 ? 'block' : 'none' }}>
                    <div className="arrow arrow-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                                  fill="#333333" />
                        </svg>
                    </div>
                    <div className="arrow arrow-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z"
                                  fill="#333333" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="news-swiper-row">
                <Swiper
                    navigation={{
                        nextEl: '.arrow-next',
                        prevEl: '.arrow-prev'
                    }}
                    breakpoints={{
                        1133: {
                            slidesPerView: 3.2,
                        },
                        745: {
                            slidesPerView: 2.2,
                        },
                        0: {
                            slidesPerView: 1.2,
                        },
                    }}
                    spaceBetween='24px'
                    className="news-swiper"
                >
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href='#' className="news-card">
                            <div className="img">
                                <img src={newsImg} alt="news-image"/>
                            </div>
                            <div className="card-content">
                                <div className="news-title-row">
                                    <span>22 апреля 2024</span>
                                    <p>Цифровая трансформация
                                        как путь и условие существования</p>
                                </div>
                                <div className='icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.5 8C19.5 7.17157 18.8284 6.5 18 6.5C17.1716 6.5 16.5 7.17157 16.5 8V16.5H15H8C7.17157 16.5 6.5 17.1716 6.5 18C6.5 18.8284 7.17157 19.5 8 19.5H15H16.5V28C16.5 28.8284 17.1716 29.5 18 29.5C18.8284 29.5 19.5 28.8284 19.5 28V19.5H21H28C28.8284 19.5 29.5 18.8284 29.5 18C29.5 17.1716 28.8284 16.5 28 16.5H21H19.5V8Z"
                                              fill="white" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="arrows-mobile" style={{display: window.innerWidth < 745 ? 'flex' : 'none'}}>
                <div className="arrow arrow-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                              fill="#333333" />
                    </svg>
                </div>
                <div className="arrow arrow-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z"
                              fill="#333333" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default NewsBlock;
