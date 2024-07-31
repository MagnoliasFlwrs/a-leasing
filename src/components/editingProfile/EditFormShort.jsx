import React, {useEffect, useState} from 'react';
import {Select, Spinner, Switch} from "@chakra-ui/react";
import FloatingCustomSelect from "../FloatingCustomSelect.jsx";
import ChangeMainPersonModal from "./ChangeMainPersonModal.jsx";

const EditFormShort = ({profile}) => {
    const [userNumber , setUserNumber] = useState('');
    const [userEmail , setUserEmail] = useState('');
    const [userAddress , setUserAddress] = useState('');
    const [addressFieldsVisibility , setAddressFieldsVisibility] = useState(false);
    const [country , setCountry] = useState('');
    const [city , setCity] = useState('');
    const [streetType , setStreetType] = useState('');
    const [street , setStreet] = useState('');
    const [houseNumber , setHouseNumber] = useState('');
    const [building , setBuilding] = useState('');
    const [flat , setFlat] = useState('');
    const [postcode , setPostcode] = useState('');
    const [openModal , setOpenModal] = useState(false)
    useEffect(() => {
        setUserNumber(profile?.contactPersons[0]?.phoneNumber);
        setUserEmail(profile?.contactPersons[0]?.email);
        setUserAddress(profile?.contactPersons[0]?.address)

    }, [profile]);

    console.log(profile)
    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setUserEmail(value);
    }
    const handleChangeNumber = (e) => {
        const { value } = e.target;
        setUserNumber(value);
    }
    const handleChangeCountry = (e) => {
        const { value } = e.target;
        setCountry(value);
    }
    const handleChangeCity = (e) => {
        const { value } = e.target;
        setCity(value);
    }
    const handleChangeStreet = (e) => {
        const { value } = e.target;
        setStreet(value);
    }
    const handleChangeHouse = (e) => {
        const { value } = e.target;
        setHouseNumber(value);
    }
    const handleChangeBuilding = (e) => {
        const { value } = e.target;
        setBuilding(value);
    }
    const handleChangeFlat = (e) => {
        const { value } = e.target;
        setFlat(value);
    }
    const handleChangePostcode = (e) => {
        const { value } = e.target;
        setPostcode(value);
    }
    const options = [
        { value: 'Улица', label: 'Улица' },
        { value: 'Переулок', label: 'Переулок' },
        { value: 'Проспект', label: 'Проспект' },
        { value: 'Бульвар', label: 'Бульвар' },
        { value: 'Тракт', label: 'Тракт' },
        { value: 'Тупик', label: 'Тупик' },
    ];
    useEffect(() => {
        console.log(streetType)
    }, [streetType]);
    return (
        <>
            {
                profile ?
                    <div className='profile-info-form-wrapper short-profile-info-form-wrapper'>
                        <div className='profile-info-form'>
                            <div className="column">
                                <div className="chapter">
                                    <p className="title">Контактные данные</p>
                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input"
                                               type="text"
                                               id="tel"
                                               value={userNumber}
                                               placeholder="text" onChange={() => handleChangeNumber()}/>
                                        <label className="text-field__label" htmlFor="tel">Контактный номер
                                            телефона <span>*</span></label>
                                    </div>
                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input"
                                               type="text"
                                               id="email"
                                               value={userEmail}
                                               placeholder="text" onChange={() => handleChangeEmail()}/>
                                        <label className="text-field__label" htmlFor="email">Адрес электронной почты</label>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="chapter">
                                    <div className="title-row">
                                        <p className="title">Почтовый адрес</p>
                                        <span className='adress'>Ваш текущий адрес: {userAddress} </span>
                                        <span className="btn"
                                              onClick={() => setAddressFieldsVisibility(!addressFieldsVisibility)}>Изменить адрес</span>
                                    </div>

                                    {
                                        addressFieldsVisibility && (
                                            <>
                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="email" id="country"
                                                           placeholder="mymail@mail.com"
                                                           onChange={() => handleChangeCountry()}/>
                                                    <label className="text-field__label" htmlFor="country">Страна <span>*</span></label>
                                                </div>
                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="email" id="city"
                                                           placeholder="mymail@mail.com" onChange={() => handleChangeCity()}/>
                                                    <label className="text-field__label" htmlFor="city">Населенный
                                                        пункт<span>*</span></label>
                                                </div>
                                                {
                                                    window.innerWidth > 745 ?
                                                        <FloatingCustomSelect
                                                            options={options}
                                                            value={streetType}
                                                            onChange={setStreetType}
                                                            label='Тип улицы'
                                                        /> :
                                                        <Select placeholder='Тип улицы'>
                                                            <option value='Улица'>Улица</option>
                                                            <option value='Переулок'>Переулок</option>
                                                            <option value='Проспект'>Проспект</option>
                                                            <option value='Бульвар'>Бульвар</option>
                                                            <option value='Тракт'>Тракт</option>
                                                            <option value='Тупик'>Тупик</option>
                                                        </Select>
                                                }


                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="email" id="street"
                                                           placeholder="mymail@mail.com" onChange={() => handleChangeStreet()}/>
                                                    <label className="text-field__label"
                                                           htmlFor="street">Улица<span>*</span></label>
                                                </div>

                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="text" id="house"
                                                           placeholder="mymail@mail.com" onChange={() => handleChangeHouse()}/>
                                                    <label className="text-field__label"
                                                           htmlFor="house">Дом<span>*</span></label>
                                                </div>
                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="text" id="building"
                                                           placeholder="mymail@mail.com"
                                                           onChange={() => handleChangeBuilding()}/>
                                                    <label className="text-field__label"
                                                           htmlFor="building">Строение/корпус</label>
                                                </div>
                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="text" id="flat"
                                                           placeholder="mymail@mail.com" onChange={() => handleChangeFlat()}/>
                                                    <label className="text-field__label"
                                                           htmlFor="flat">Квартира<span>*</span></label>
                                                </div>
                                                <div className="text-field text-field_floating">
                                                    <input className="text-field__input" type="text" id="postcode"
                                                           placeholder="mymail@mail.com"
                                                           onChange={() => handleChangePostcode()}/>
                                                    <label className="text-field__label" htmlFor="postcode">Индекс</label>
                                                </div>
                                            </>
                                        )
                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <Spinner size='xl'/>
            }
        </>
    );
};

export default EditFormShort;