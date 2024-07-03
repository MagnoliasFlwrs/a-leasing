import React, {useState} from 'react';

const FLPrivateInfo = () => {
    const [dopNumber , setDopNumber] = useState('');
    const [email , setEmail] = useState('');
    const [education , setEducation] = useState('');
    const [city , setCity] = useState('');
    const [streetType , setStreetType] = useState('');
    const [street , setStreet] = useState('');

    const handleChangeDopNumber = (e) => {
        const { value } = e.target;
        setDopNumber(value);
    }
    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    const handleChangeEducation = (e) => {
        const { value } = e.target;
        setEducation(value);
    }
    const handleChangeCity = (e) => {
        const { value } = e.target;
        setCity(value);
    }
    const handleChangeStreetType = (e) => {
        const { value } = e.target;
        setStreetType(value);
    }
    const handleChangeStreet = (e) => {
        const { value } = e.target;
        setStreet(value);
    }
    return (
        <div className='profile-info-form'>
            <div className="column">
                <div className="chapter">
                    <p className="title">Контактные данные</p>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="text" id="dopNum"
                               placeholder="+375(00)000-00-00" onChange={() => handleChangeDopNumber()}/>
                        <label className="text-field__label" htmlFor="dopNum">Дополнительный номер телефона</label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="email" id="email"
                               placeholder="mymail@mail.com" onChange={() => handleChangeEmail()}/>
                        <label className="text-field__label" htmlFor="email">Адрес электронной
                            почты <span>*</span></label>
                    </div>
                </div>
                <div className="chapter">
                    <p className="title">Образование</p>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="text" id="education"
                               placeholder="text" onChange={() => handleChangeEducation()}/>
                        <label className="text-field__label" htmlFor="education">Образование <span>*</span></label>
                    </div>
                </div>

            </div>
            <div className="column">
                <div className="chapter">
                    <p className="title">Адрес проживания</p>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="email" id="city"
                               placeholder="mymail@mail.com" onChange={() => handleChangeCity()}/>
                        <label className="text-field__label" htmlFor="city">Населенный пункт<span>*</span></label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="email" id="streetType"
                               placeholder="mymail@mail.com" onChange={() => handleChangeStreetType()}/>
                        <label className="text-field__label" htmlFor="streetType">Тип улицы<span>*</span></label>
                    </div>
                    <div className="text-field text-field_floating">
                        <input className="text-field__input" type="email" id="street"
                               placeholder="mymail@mail.com" onChange={() => handleChangeStreet()}/>
                        <label className="text-field__label" htmlFor="street">Улица<span>*</span></label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FLPrivateInfo;