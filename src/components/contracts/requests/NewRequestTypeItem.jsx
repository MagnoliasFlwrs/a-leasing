import React from 'react';

const NewRequestTypeItem = ({data}) => {
    function boxHandler(e) {
        e.preventDefault();
        let currentBox = e.target.closest(".box");
        let currentContent = currentBox.querySelector('.content');

        currentBox.classList.toggle("active");

        if (currentBox.classList.contains("active")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        } else {
            currentContent.style.maxHeight = 0;
        }
    }

    const showModal = () => {
        document.querySelector('.new-request-modal').classList.add('open');
        document.querySelector('.overlay').classList.add('open');
    }
    return (
        <div className='new-request-type-item'>
            <div className="accordeon">
                <div className="box">
                    <div className="label" onClick={(event) => boxHandler(event)}>
                        <div className="label-cont">
                            {data}
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                 fill="none">
                                <path d="M1 8.69995H15" stroke="#333333" strokeOpacity="0.7" strokeWidth="1.5"
                                      strokeLinecap="round"/>
                                <path d="M8 15.7V1.69995" stroke="#333333" strokeOpacity="0.7" strokeWidth="1.5"
                                      strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <div className="document-item" onClick={()=> showModal()}>
                                <div className="icon">
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

                                </div>
                                <span className="title">заявление о возврате денежных средств</span>
                                <span className="price">Бесплатно</span>
                            </div>
                            <div className="document-item" onClick={()=> showModal()}>
                                <div className="icon">
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

                                </div>
                                <span className="title">акт сверки</span>
                                <span className="price">Бесплатно</span>
                            </div>
                            <div className="document-item" onClick={()=> showModal()}>
                                <div className="icon">
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

                                </div>
                                <span className="title">о переносе даты уплаты лизинговых платежей</span>
                                <span className="price">Бесплатно</span>
                            </div>
                            <div className="document-item" onClick={()=> showModal()}>
                                <div className="icon">
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

                                </div>
                                <span className="title">частичное досрочное погашение</span>
                                <span className="price">Бесплатно</span>
                            </div>

                            <div className="document-item" onClick={()=> showModal()}>
                                <div className="icon">
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

                                </div>
                                <span className="title">полное досрочное погашение</span>
                                <span className="price">Бесплатно</span>
                            </div>
                            <div className="document-item" onClick={()=> showModal()}>
                                <div className="icon">
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

                                </div>
                                <span className="title">иное</span>
                                <span className="price">Бесплатно</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRequestTypeItem;