

import React, { useState, useEffect } from 'react';
// import './Accordion.css';

const LegalPersonInfoBlockPart = ({ profile }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (profile) {
            setActiveIndex(0);
        }
    }, [profile]);

    function boxHandler(index, e) {
        e.preventDefault();
        setActiveIndex(index === activeIndex ? null : index);
    }

    const renderAccordionItem = (index, condition, labelContent, content) => (
        condition && (
            <div className={`accordeon ${activeIndex === index ? 'active' : ''}`} key={index}>
                <div className="box" onClick={(e) => boxHandler(index, e)}>
                    <div className="label">
                        <div className="label-cont">
                            <span>{labelContent}</span>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289Z"
                                      fill="#333333" fillOpacity="0.4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="content" style={{transition: '.5s ease', maxHeight: activeIndex === index ? '1000px' : '0' }}>
                        <div className="box-content-wrapper">
                            <div className="user-info">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div className='accordeons'>
            {renderAccordionItem(
                0,
                profile?.profile?.managementInfo?.managerInfo?.naturalPerson?.position === "Директор",
                `${profile?.profile?.managementInfo?.managerInfo?.naturalPerson?.lastname} ${profile?.profile?.managementInfo?.managerInfo?.naturalPerson?.firstname} ${profile?.profile?.managementInfo?.managerInfo?.naturalPerson?.middlename}`,
                <>
                    <p className="info">
                        <span>Должность:</span> {profile?.profile?.managementInfo?.managerInfo?.naturalPerson?.position}
                    </p>
                    <p className="info">
                        <span>Эл.почта:</span> {profile?.profile?.generalInfo?.legalAddress?.email}
                    </p>
                    <p className="info">
                        <span>Телефон для связи:</span> {profile?.profile?.generalInfo?.legalAddress?.phoneNumbers}
                    </p>
                    <p className="info">
                        <span>Почтовый адрес:</span> {profile?.profile?.generalInfo?.legalAddress?.zipCode} {profile?.profile?.generalInfo?.legalAddress?.country} {profile?.profile?.generalInfo?.legalAddress?.region} {profile?.profile?.generalInfo?.legalAddress?.locality} {profile?.profile?.generalInfo?.legalAddress?.street} {profile?.profile?.generalInfo?.legalAddress?.building}
                    </p>
                </>
            )}

            {renderAccordionItem(
                1,
                profile?.profile?.managementInfo?.accountingInfo?.naturalPersonInfo?.fullName?.position === "главный бухгалтер",
                `${profile?.profile?.managementInfo?.accountingInfo?.naturalPersonInfo?.fullName?.lastname} ${profile?.profile?.managementInfo?.accountingInfo?.naturalPersonInfo?.fullName?.firstname} ${profile?.profile?.managementInfo?.accountingInfo?.naturalPersonInfo?.fullName?.middlename}`,
                <>
                    <p className="info">
                        <span>Должность:</span> {profile?.profile?.managementInfo?.accountingInfo?.naturalPersonInfo?.fullName?.position}
                    </p>
                    <p className="info">
                        <span>Эл.почта:</span> {profile?.profile?.generalInfo?.legalAddress?.email}
                    </p>
                    <p className="info">
                        <span>Телефон для связи:</span> {profile?.profile?.generalInfo?.legalAddress?.phoneNumbers}
                    </p>
                    <p className="info">
                        <span>Почтовый адрес:</span> {profile?.profile?.generalInfo?.legalAddress?.zipCode} {profile?.profile?.generalInfo?.legalAddress?.country} {profile?.profile?.generalInfo?.legalAddress?.region} {profile?.profile?.generalInfo?.legalAddress?.locality} {profile?.profile?.generalInfo?.legalAddress?.street} {profile?.profile?.generalInfo?.legalAddress?.building}
                    </p>
                </>
            )}
        </div>
    );
};



export default LegalPersonInfoBlockPart;