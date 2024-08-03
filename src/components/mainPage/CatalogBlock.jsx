import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import catalogImg from '../../images/catalogimage.png'
import {Spinner} from "@chakra-ui/react";


SwiperCore.use([Navigation]);
const CatalogBlock = ({data}) => {
    console.log(data)
    useEffect(() => {
        const updateNavigationVisibility = () => {
            const arrows = document.querySelectorAll('.catalog-arrows');
            const arrowsMobile = document.querySelectorAll('.catalog-arrows-mobile');
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
        <>
            {
                data ?
                    <div className='catalog-block'>
                        <div className="title-row">
                            <h2>Каталог</h2>
                            <a href="#">
                                <span>Перейти к каталогу</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                     fill="none">
                                    <path
                                        d="M9.98528 1.25691C9.98528 0.980764 9.76142 0.756906 9.48528 0.756906L4.98528 0.756906C4.70914 0.756906 4.48528 0.980764 4.48528 1.25691C4.48528 1.53305 4.70914 1.75691 4.98528 1.75691L8.98528 1.75691L8.98528 5.75691C8.98528 6.03305 9.20914 6.25691 9.48528 6.25691C9.76142 6.25691 9.98528 6.03305 9.98528 5.75691L9.98528 1.25691ZM1.35355 10.0957L9.83883 1.61046L9.13173 0.903353L0.646447 9.38863L1.35355 10.0957Z"
                                        fill="#0070C9"/>
                                </svg>
                            </a>
                            <div className="catalog-arrows"
                                 style={{display: window.innerWidth > 745 ? 'block' : 'none'}}>
                                <div className="arrow catalog-arrow-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                                              fill="#333333"/>
                                    </svg>
                                </div>
                                <div className="arrow catalog-arrow-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z"
                                              fill="#333333"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-swiper-row">
                            <Swiper
                                navigation={{
                                    nextEl: '.catalog-arrow-next',
                                    prevEl: '.catalog-arrow-prev'
                                }}
                                breakpoints={{
                                    1133: {
                                        slidesPerView: 3.5,
                                        spaceBetween: 36,
                                    },
                                    745: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 36,
                                    },
                                    0: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 24,
                                    },
                                }}
                                spaceBetween='24px'
                                className="catalog-swiper"
                            >
                                {
                                    data?.data?.map((item , index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <a href={item.link} className='catalog-card'>
                                                    <div className="row">
                                                        <p>{item.leasingSubjectType}</p>
                                                        <span>{item.catalogType}</span>
                                                    </div>
                                                    <div className="image">
                                                        <picture>
                                                            <source srcSet={item.mobileImageUrl}
                                                                    media="(max-width: 745px)"/>
                                                            <img src={item.desktopImageUrl} alt="news-image"/>
                                                        </picture>
                                                    </div>
                                                </a>
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper>
                        </div>
                        <div className="link">
                            <a href="#">Перейти к каталогу</a>
                        </div>
                        <div className="catalog-arrows-mobile"
                             style={{display: window.innerWidth < 745 ? 'flex' : 'none'}}>
                            <div className="arrow catalog-arrow-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                                          fill="#333333"/>
                                </svg>
                            </div>
                            <div className="arrow catalog-arrow-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z"
                                          fill="#333333"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    :
                    <Spinner size='xl'/>
            }
        </>

    );
};

export default CatalogBlock;