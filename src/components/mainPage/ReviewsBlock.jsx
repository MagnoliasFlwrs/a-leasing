import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard.jsx";
import {Spinner} from "@chakra-ui/react";

const ReviewsBlock = ({data}) => {

    useEffect(() => {
        const updateNavigationVisibility = () => {
            const arrows = document.querySelectorAll('.reviews-arrows');
            const arrowsMobile = document.querySelectorAll('.reviews-arrows-mobile');
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
                    <div className='reviews-block'>
                        <div className="title-row">
                            <h2>Отзывы от наших клиентов</h2>
                            <a href="#">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="1" width="15" height="15" rx="7.5" stroke="#0070C9"/>
                                    <path d="M8 4L8 13" stroke="#0070C9" strokeLinecap="round"/>
                                    <path
                                        d="M9 8H8.5V9H9V8ZM12 9C12.2761 9 12.5 8.77614 12.5 8.5C12.5 8.22386 12.2761 8 12 8V9ZM9 9L12 9V8L9 8V9Z"
                                        fill="#0070C9"/>
                                    <path
                                        d="M7 8H7.5V9H7V8ZM4 9C3.72386 9 3.5 8.77614 3.5 8.5C3.5 8.22386 3.72386 8 4 8V9ZM7 9H4V8H7V9Z"
                                        fill="#0070C9"/>
                                </svg>


                                <span>Оставить отзыв</span>

                            </a>
                            <div className="reviews-arrows"
                                 style={{display: window.innerWidth > 745 ? 'flex' : 'none'}}>
                                <div className="arrow reviews-arrow-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                                              fill="#333333"/>
                                    </svg>
                                </div>
                                <div className="arrow reviews-arrow-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z"
                                              fill="#333333"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="reviews-swiper-row">
                            <Swiper
                                navigation={{
                                    nextEl: '.reviews-arrow-next',
                                    prevEl: '.reviews-arrow-prev'
                                }}
                                breakpoints={{
                                    1133: {
                                        slidesPerView: 4.5,
                                        spaceBetween: 36,
                                    },
                                    950: {
                                        slidesPerView: 3.3,
                                        spaceBetween: 36,
                                    },
                                    745: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 36,
                                    },
                                    0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 24,
                                    },
                                }}
                                spaceBetween='24px'
                                className="review-swiper"
                            >
                                {
                                    data?.data.map((item , index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <ReviewCard item={item}/>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                        </div>
                        <div className="link">
                            <a href="#">Оставить отзыв</a>
                        </div>
                        <div className="reviews-arrows-mobile"
                             style={{display: window.innerWidth < 745 ? 'flex' : 'none'}}>
                            <div className="arrow reviews-arrow-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                                          fill="#333333"/>
                                </svg>
                            </div>
                            <div className="arrow reviews-arrow-next">
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

export default ReviewsBlock;