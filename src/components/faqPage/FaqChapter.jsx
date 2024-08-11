import React, {useEffect, useState} from 'react';
import {Spinner} from "@chakra-ui/react";
import {useGetFaqQuestionsByCategoryIdQuery} from "../../services/faq/faq.service.js";

const FaqChapter = ({ isAll , categoryName , id , chapterIndex}) => {
    const [activeIndex, setActiveIndex] = useState(chapterIndex === 0 ? 0 : null);
    const { data, error, isSuccess } = useGetFaqQuestionsByCategoryIdQuery({ limit: 10, page: 1 , id: id });

    console.log(categoryName)

    console.log(data)
    const boxHandler = (index, e) => {
        e.preventDefault();
        setActiveIndex(index === activeIndex ? null : index);
    };


    return (
        <>
            {
                data ?
                    <div className='faq-chapter'>
                        {
                            isAll && <p className="title">{categoryName}</p>
                        }

                        <div className="accordeons">
                            {data.data.map((item, index) => (
                                <div className={`accordeon ${activeIndex === index ? 'active' : ''}`} key={index}>
                                    <div className="box" onClick={(e) => boxHandler(index, e)}>
                                        <div className="label">
                                            <div className="label-cont">
                                                <span>{item.question}</span>
                                            </div>
                                            <div className="show-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     viewBox="0 0 16 16" fill="none">
                                                    <path d="M1 8H15" stroke="#333333" strokeOpacity="0.7"
                                                          strokeWidth="1.5" strokeLinecap="round"/>
                                                    <path d="M8 15V1" stroke="#333333" strokeOpacity="0.7"
                                                          strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="content" style={{
                                            transition: '.5s ease',
                                            maxHeight: activeIndex === index ? '500px' : '0'
                                        }}>
                                            <div className="box-content-wrapper">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <Spinner size='xl'/>
            }


        </>

    );
};

export default FaqChapter;