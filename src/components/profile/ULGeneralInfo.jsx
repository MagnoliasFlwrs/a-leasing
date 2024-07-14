import React from 'react';

const UlGeneralInfo = ({data}) => {

    function boxHandler(e) {
        e.preventDefault();
        let currentBox = e.target.closest(".box");
        let currentContent = currentBox.querySelector('.content .info-container');
        let currentHide =  e.target.closest(".box").querySelector('.hide');


        currentBox.classList.toggle("active");

        if (currentBox.classList.contains("active")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        } else {
            currentContent.style.maxHeight = 0;
        }
    }

    return (
        <div className='private-info-block'>
            <div className="accordeon">
                <div className="box" onClick={(event) => boxHandler(event)}>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Сведения о регистрации организации</p>
                            <ul className='info-container'>
                                <li>
                                    <span>Наименование организации</span>
                                    <span>{data?.generalInfo?.generalInfo?.fullName}</span>
                                </li>
                                <li>
                                    <span>УНП</span>
                                    <span>{data?.generalInfo?.generalInfo?.unp}</span>
                                </li>
                                <li>
                                    <span>Регистрационный номер</span>
                                    <span>{data?.generalInfo?.stateRegistrationInfo?.registrationNumber}</span>
                                </li>
                                <li>
                                    <span>Дата регистрации</span>
                                    <span>{data?.generalInfo?.stateRegistrationInfo?.dateOfRegistration}</span>
                                </li>
                                <li>
                                    <span>Наименование регистрирующего органа</span>
                                    <span>{data?.generalInfo?.stateRegistrationInfo?.registeringAuthorityName}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="label">
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordeon">
                <div className="box" onClick={(event) => boxHandler(event)}>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Адрес регистрации и фактического местонахождения</p>
                            <ul className='info-container'>
                                <li>
                                    <span>Юридический адрес</span>
                                    <span>{data?.generalInfo?.legalAddress?.zipCode} {data?.generalInfo?.legalAddress?.country} {data?.generalInfo?.legalAddress?.region} {data?.generalInfo?.legalAddress?.locality} {data?.generalInfo?.legalAddress?.street ? '' : data?.generalInfo?.legalAddress?.street } {data?.generalInfo?.legalAddress?.building}
                                    </span>
                                </li>
                                <li>
                                    <span>Фактический адрес</span>
                                    <span>{data?.generalInfo?.actualAddress?.zipCode} {data?.generalInfo?.actualAddress?.country} {data?.generalInfo?.actualAddress?.region} {data?.generalInfo?.actualAddress?.locality} {data?.generalInfo?.actualAddress?.street ?  '' : data?.generalInfo?.actualAddress?.street} {data?.generalInfo?.actualAddress?.building}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="label">
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordeon">
                <div className="box" onClick={(event) => boxHandler(event)}>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Контактные данные</p>
                            <ul className='info-container'>
                                <li>
                                    <span>Email</span>
                                    <span>{data?.generalInfo?.legalAddress?.email}</span>
                                </li>
                                <li>
                                    <span>Номер телефона директора</span>
                                    <span>{data?.generalInfo?.legalAddress?.email}</span>
                                </li>
                                <li>
                                    <span>Номер телефона бухгалтера</span>
                                    <span>{data?.generalInfo?.legalAddress?.email}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="label">
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordeon">
                <div className="box" onClick={(event) => boxHandler(event)}>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Обслуживающий банк</p>
                            <ul className='info-container'>
                                <li>
                                    <span>Обслуживающий банк</span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="label">
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UlGeneralInfo;