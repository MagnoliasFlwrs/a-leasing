import React from 'react';
import promo1 from '../../images/promo1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import newsImg from "../../images/newsimg.png";
import {Spinner} from "@chakra-ui/react";

const PromotionsBlock = ({data}) => {

    return (
        <>
            {
                data ?
                    <div className='promotions-block'>
                        <div className="title-row">
                            <h2>Акции и предложения</h2>
                            <a href="#">
                                <span>Все акции</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                     fill="none">
                                    <path
                                        d="M9.49993 0.756906C9.49993 0.480764 9.27607 0.256906 8.99993 0.256906L4.49993 0.256906C4.22379 0.256906 3.99993 0.480764 3.99993 0.756906C3.99993 1.03305 4.22379 1.25691 4.49993 1.25691L8.49993 1.25691L8.49993 5.25691C8.49993 5.53305 8.72379 5.75691 8.99993 5.75691C9.27607 5.75691 9.49993 5.53305 9.49993 5.25691L9.49993 0.756906ZM0.868202 9.59574L9.35348 1.11046L8.64638 0.403353L0.161095 8.88863L0.868202 9.59574Z"
                                        fill="#0070C9"/>
                                </svg>
                            </a>
                        </div>
                        <div className="promotions-container">

                            {
                                data.data.map((item, index)=> {
                                    const parser = new DOMParser();
                                    const doc = parser.parseFromString(item.text, 'text/html');
                                    const cleanText = doc.body.textContent.trim();
                                    return (
                                        <div className="promotion-card" key={index}>
                                            <div className="img">
                                                <picture>
                                                    <source srcSet={item.mobileImageUrl}
                                                            media="(max-width: 745px)"/>
                                                    <img src={item.desktopImageUrl} alt="news-image"/>
                                                </picture>
                                            </div>
                                            <div className="promotion-card-content">
                                                <div className="row">
                                                    <p>{item.title}</p>
                                                    <span>{cleanText}</span>
                                                </div>
                                                <a href={item.link}>Узнать подробности</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div className="promotions-swiper-container">
                            <Swiper
                                navigation={{
                                    nextEl: '.promotions-arrows .arrow-next',
                                    prevEl: '.promotions-arrows .arrow-prev'
                                }}
                                className="promotions-swiper"
                            >
                                {
                                    data.data.map((item , index) => {
                                        const parser = new DOMParser();
                                        const doc = parser.parseFromString(item.text, 'text/html');
                                        const cleanText = doc.body.textContent.trim();
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="promotion-card" >
                                                    <div className="img">
                                                        <picture>
                                                            <source srcSet={item.mobileImageUrl}
                                                                    media="(max-width: 745px)"/>
                                                            <img src={item.desktopImageUrl} alt="news-image"/>
                                                        </picture>
                                                    </div>
                                                    <div className="promotion-card-content">
                                                        <div className="row">
                                                            <p>{item.title}</p>
                                                            <span>{cleanText}</span>
                                                        </div>
                                                        <a href={item.link}>Узнать подробности</a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                            <div className="promotions-arrows">
                                <div className="arrow arrow-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M15.7071 5.79289C15.3166 5.40237 14.6834 5.40237 14.2929 5.79289L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L10.4142 12.5L15.7071 7.20711C16.0976 6.81658 16.0976 6.18342 15.7071 5.79289Z"
                                              fill="#333333"/>
                                    </svg>
                                </div>
                                <div className="arrow arrow-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z"
                                              fill="#333333"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Spinner size='xl'/>
            }
        </>

    );
};

export default PromotionsBlock;