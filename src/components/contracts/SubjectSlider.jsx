import React from 'react';
import {Flex} from "@chakra-ui/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper , SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

const SubjectSlider = () => {
    return (
        <Flex className='subject-slider-wrap'>
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="subjectSwiper">
                <SwiperSlide>
                    <div className="subject-card">
                        <div className="title-column">
                            <span>Автомобиль</span>
                            <p>Mazda 3 2020 г.в.</p>
                            <p>JN1WNYD21U0000001</p>
                        </div>
                        <p className="subject-num">ФЛ000-00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="subject-card">
                        <div className="title-column">
                            <span>Автомобиль</span>
                            <p>Mazda 3 2023 г.в.</p>
                            <p>JN1WNYD21U0000001</p>
                        </div>
                        <p className="subject-num">ФЛ000-00</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="subject-card">
                        <div className="title-column">
                            <span>Автомобиль</span>
                            <p>Mazda 6 2020 г.в.</p>
                            <p>JN1WNYD21U0000001</p>
                        </div>
                        <p className="subject-num">ФЛ000-00</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
};

export default SubjectSlider;