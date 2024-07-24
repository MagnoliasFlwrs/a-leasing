import React, {useState} from 'react';

const ContactForm = () => {
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
        <div className='contact-form-block'>
            <div className="title-row">
                <h2>Связаться с компанией</h2>
            </div>
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
                    <textarea className="text-field__input text-field__textarea"  id="comment"
                           placeholder="comment" onChange={() => handleChangeComment()}/>
                    <label className="text-field__label" htmlFor="email">Комментарий</label>
                </div>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default ContactForm;