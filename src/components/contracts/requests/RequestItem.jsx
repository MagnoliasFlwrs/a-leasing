import React from 'react';

const RequestItem = () => {

    const showModal = () => {
        document.querySelector('.custom-modal').classList.add('open');
        document.querySelector('.overlay').classList.add('open');
    }
    function boxHandler(e) {
        e.preventDefault();
        let currentBox = e.target.closest(".box");
        let currentContent = currentBox.querySelector('.content');
        let currentHide =  e.target.closest(".box").querySelector('.hide');


        currentBox.classList.toggle("active");

        if (currentBox.classList.contains("active")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        } else {
            currentContent.style.maxHeight = 0;
        }
    }
    return (
        <div className='request-item'>
            <div className="accordeon">
                <div className="box">
                    <div className="label" onClick={(event) => boxHandler(event)}>
                        <div className="label-cont">
                            <p className="date">11.04.2024</p>
                            <p className="title">Доверенность на регистрацию предмета лизинга от 11.01.2020</p>
                            <p className="changing-status">11.04.2024</p>
                            <div className="status">
                                <span></span>
                                <p>Требуется дополнение</p>
                            </div>
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
                            <div className="item">
                                <p className="comment">Поручитель не завершил заполнение анкеты. Вы можете отправить ему
                                    ссылку скопировав ее или ввести номер телефона поручителя.</p>
                                <div className="btn" onClick={()=>showModal()}>Дополнить</div>
                            </div>
                            <div className="item">
                                <div className="btn" onClick={()=>showModal()}>Просмотреть документ</div>
                            </div>
                            <div className="item">
                                <div className="btn">Скачать документ</div>
                            </div>
                            <div className="item">
                                <div className="btn delete-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                         fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.33337 4.00016C1.33337 3.63197 1.63185 3.3335 2.00004 3.3335H14C14.3682 3.3335 14.6667 3.63197 14.6667 4.00016C14.6667 4.36835 14.3682 4.66683 14 4.66683H2.00004C1.63185 4.66683 1.33337 4.36835 1.33337 4.00016Z"
                                              fill="#EA2119"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M6.66663 1.99984C6.48981 1.99984 6.32025 2.07007 6.19522 2.1951C6.0702 2.32012 5.99996 2.48969 5.99996 2.6665V3.99984C5.99996 4.36803 5.70148 4.6665 5.33329 4.6665C4.9651 4.6665 4.66663 4.36803 4.66663 3.99984V2.6665C4.66663 2.13607 4.87734 1.62736 5.25241 1.25229C5.62749 0.877218 6.13619 0.666504 6.66663 0.666504H9.33329C9.86373 0.666504 10.3724 0.877218 10.7475 1.25229C11.1226 1.62736 11.3333 2.13607 11.3333 2.6665V3.99984C11.3333 4.36803 11.0348 4.6665 10.6666 4.6665C10.2984 4.6665 9.99996 4.36803 9.99996 3.99984V2.6665C9.99996 2.48969 9.92972 2.32012 9.8047 2.1951C9.67967 2.07007 9.5101 1.99984 9.33329 1.99984H6.66663ZM3.33329 3.33317C3.70148 3.33317 3.99996 3.63165 3.99996 3.99984V13.3332C3.99996 13.51 4.0702 13.6795 4.19522 13.8046C4.32025 13.9296 4.48982 13.9998 4.66663 13.9998H11.3333C11.5101 13.9998 11.6797 13.9296 11.8047 13.8046C11.9297 13.6795 12 13.51 12 13.3332V3.99984C12 3.63165 12.2984 3.33317 12.6666 3.33317C13.0348 3.33317 13.3333 3.63165 13.3333 3.99984V13.3332C13.3333 13.8636 13.1226 14.3723 12.7475 14.7474C12.3724 15.1225 11.8637 15.3332 11.3333 15.3332H4.66663C4.13619 15.3332 3.62748 15.1225 3.25241 14.7474C2.87734 14.3723 2.66663 13.8636 2.66663 13.3332V3.99984C2.66663 3.63165 2.9651 3.33317 3.33329 3.33317Z"
                                              fill="#EA2119"/>
                                    </svg>
                                    <span>Отменить заявку</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestItem;