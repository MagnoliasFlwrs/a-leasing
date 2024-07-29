import React, { useState, useEffect } from 'react';

const LegalPersonInfoBlockPart = ({ profile }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (profile) {
            setActiveIndex(0);
        }
    }, [profile]);

    const boxHandler = (index, e) => {
        e.preventDefault();
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            {profile && profile.contactPersons.length > 0 && (
                <div className='accordeons'>
                    {profile.contactPersons.map((item, index) => (
                        <div className={`accordeon ${activeIndex === index ? 'active' : ''}`} key={index}>
                            <div className="box" onClick={(e) => boxHandler(index, e)}>
                                <div className="label">
                                    <div className="label-cont">
                                        <span>{item.fullName}</span>
                                    </div>
                                    <div className="show-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z"
                                                  fill="#333333" fillOpacity="0.4"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content" style={{ transition: '.5s ease', maxHeight: activeIndex === index ? '1000px' : '0' }}>
                                    <div className="box-content-wrapper">
                                        <div className="user-info">
                                            <p className="info">
                                                <span>Должность:</span> {item?.position}
                                            </p>
                                            <p className="info">
                                                <span>Эл.почта:</span> {item?.email}
                                            </p>
                                            <p className="info">
                                                <span>Телефон для связи:</span> {item?.phoneNumber}
                                            </p>
                                            <p className="info">
                                                <span>Почтовый адрес:</span> {item?.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default LegalPersonInfoBlockPart;
