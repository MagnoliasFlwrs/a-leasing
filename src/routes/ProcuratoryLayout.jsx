import React from 'react';
import img from '../images/doc.png'
import '../styles/procuratoryLayout.css'
import {PinInput, PinInputField} from "@chakra-ui/react";

const ProcuratoryLayout = () => {
    return (
        <div className='procuratory-layout'>
            <div className="document-block">
                <a href="/contracts">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.66669 8.49967C2.66669 8.13148 2.96516 7.83301 3.33335 7.83301H12.6667C13.0349 7.83301 13.3334 8.13148 13.3334 8.49967C13.3334 8.86786 13.0349 9.16634 12.6667 9.16634H3.33335C2.96516 9.16634 2.66669 8.86786 2.66669 8.49967Z"
                              fill="#0070C9"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.47143 3.36225C8.73177 3.6226 8.73177 4.04471 8.47143 4.30506L4.27616 8.50033L8.47143 12.6956C8.73177 12.9559 8.73177 13.378 8.47143 13.6384C8.21108 13.8987 7.78897 13.8987 7.52862 13.6384L2.86195 8.97173C2.6016 8.71138 2.6016 8.28927 2.86195 8.02892L7.52862 3.36225C7.78897 3.1019 8.21108 3.1019 8.47143 3.36225Z"
                              fill="#0070C9"/>
                    </svg>
                    {
                        (window.innerWidth < 744) ?
                            <span>Назад</span> :
                            <span>Вернуться к предыдущему шагу</span>
                    }

                </a>
                {
                    (window.innerWidth < 1024) && <p className="title">Доверенность на пересечение государственной границы</p>
                }
                {
                    (window.innerWidth < 1024) && <a href='#' className='watch'>Просмотреть документ </a>
                }
                {
                    (window.innerWidth > 1024) &&
                    <div className="document-wrap">
                        <img src={img} alt="document"/>
                    </div>
                }

            </div>
            <div className="confirm-block">
                <div className="confirm-inner">
                    <p>На ваш номер телефона<br/>
                        +375 29 100 00 00<br/>
                        выслан смс-код подтверждения.<br/>
                        Введите код</p>
                    <div className="pin-inputs">
                        <PinInput  manageFocus={true}>
                            <PinInputField className='pin-input'/>
                            <PinInputField className='pin-input'/>
                            <PinInputField className='pin-input'/>
                            <PinInputField className='pin-input'/>
                            <PinInputField className='pin-input'/>
                            <PinInputField className='pin-input'/>
                        </PinInput>
                    </div>

                    <a href="#">Отправить код повторно через 00:00</a>
                    <button>Подписать документ</button>
                </div>
                <span>Если вы сменили номер телефона, вам необходимо обновить данные через МСИ.<br/>
Обратитесь к нашему менеджеру для консультации.<br/>
Телефон контакт-центра +375 29 000 00 00 </span>
            </div>
        </div>
    );
};

export default ProcuratoryLayout;