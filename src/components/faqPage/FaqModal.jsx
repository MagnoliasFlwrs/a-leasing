import React, {useState} from 'react';

const FaqModal = ({isOpen , changeModal}) => {
    const [name , setName] = useState('');
    const [num , setNum] = useState('');
    const [email , setEmail] = useState('');
    const [comment , setComment] = useState('');

    const handleChangeName = (e) => {
        const { value } = e.target;
        setName(value);
    }
    const handleChangeNum = (e) => {
        const { value } = e.target;
        setNum(value);
    }
    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    const handleChangeComment = (e) => {
        const { value } = e.target;
        setComment(value);
    }
    return (
        <div className={isOpen ? 'faq-modal open' : 'faq-modal'}>
            <div className="modal-body">
                <div className="back-btn" onClick={()=> changeModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.66666 8.80046C2.66666 8.43227 2.96513 8.13379 3.33332 8.13379H12.6667C13.0348 8.13379 13.3333 8.43227 13.3333 8.80046C13.3333 9.16865 13.0348 9.46712 12.6667 9.46712H3.33332C2.96513 9.46712 2.66666 9.16865 2.66666 8.80046Z"
                              fill="#0070C9"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.47139 3.66304C8.73174 3.92339 8.73174 4.3455 8.47139 4.60584L4.27613 8.80111L8.47139 12.9964C8.73174 13.2567 8.73174 13.6788 8.47139 13.9392C8.21105 14.1995 7.78893 14.1995 7.52859 13.9392L2.86192 9.27251C2.60157 9.01216 2.60157 8.59005 2.86192 8.3297L7.52859 3.66304C7.78893 3.40269 8.21105 3.40269 8.47139 3.66304Z"
                              fill="#0070C9"/>
                    </svg>
                    <span>Вернуться назад</span>
                </div>
                <div className="info-row">
                    <p>Контакт-центр</p>
                    <a href="tel:+375447017070 ">+375 (44) 701-70-70 </a>
                    <a href="mailto:info@a-leasing.by">info@a-leasing.by</a>
                </div>
                <p className="title">Заказать обратный звонок</p>
                <div className="form">
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="text" id="name" placeholder='Имя'
                               onChange={() => handleChangeName()}/>
                        <label className="text-field__label" htmlFor="name">Имя <span>*</span></label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="text" id="num"
                               placeholder="+375(00)000-00-00" onChange={() => handleChangeNum()}/>
                        <label className="text-field__label" htmlFor="num">Hомер телефона <span>*</span></label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="email" id="email"
                               placeholder="mymail@mail.com" onChange={() => handleChangeEmail()}/>
                        <label className="text-field__label" htmlFor="email">Электронная почта</label>
                    </div>
                    <div className="text-field text-field_floating">
                    <textarea className="text-field__input text-field__textarea" id="comment"
                              placeholder="comment" onChange={() => handleChangeComment()}/>
                        <label className="text-field__label" htmlFor="email">Комментарий</label>
                    </div>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default FaqModal;