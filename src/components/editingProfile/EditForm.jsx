import React, {useEffect, useState} from 'react';
import {Select, Switch} from "@chakra-ui/react";
import FloatingCustomSelect from "../FloatingCustomSelect.jsx";
import ChangeMainPersonModal from "./ChangeMainPersonModal.jsx";

const EditForm = ({person , mainPerson}) => {
    const {address , email , fullName , isMain , isRecipient , phoneNumber , position} = person;
    const [fio , setFio] = useState('');
    const [switchState , setSwitchState] = useState(false);
    const [userPosition , setUserPosition] = useState('');
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
        setFio(fullName);
        setSwitchState(isMain);
        setUserPosition(position);
        setUserNumber(phoneNumber);
        setUserEmail(email);
        setUserAddress(address)

    }, [person]);


    const handleChangeFio = (e) => {
        const { value } = e.target;
        setFio(value);
    }
    const handleChangeSwitch = (e)=> {
        const { value } = e.target;
        setSwitchState(value);
        if( !switchState) {
            setOpenModal(true)
        }
    }
    const handleChangePosition = (e)=> {
        const { value } = e.target;
        setUserPosition(value);
    }
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
        <div className='profile-info-form-wrapper'>
            <div className="form-head">
                <p>{fullName}</p>
                <div className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.3335 4.50065C1.3335 4.13246 1.63197 3.83398 2.00016 3.83398H14.0002C14.3684 3.83398 14.6668 4.13246 14.6668 4.50065C14.6668 4.86884 14.3684 5.16732 14.0002 5.16732H2.00016C1.63197 5.16732 1.3335 4.86884 1.3335 4.50065Z"
                              fill="#EA2119"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6.6665 2.49935C6.48969 2.49935 6.32012 2.56959 6.1951 2.69461C6.07007 2.81964 5.99984 2.9892 5.99984 3.16602V4.49935C5.99984 4.86754 5.70136 5.16602 5.33317 5.16602C4.96498 5.16602 4.6665 4.86754 4.6665 4.49935V3.16602C4.6665 2.63558 4.87722 2.12687 5.25229 1.7518C5.62736 1.37673 6.13607 1.16602 6.6665 1.16602H9.33317C9.8636 1.16602 10.3723 1.37673 10.7474 1.7518C11.1225 2.12687 11.3332 2.63558 11.3332 3.16602V4.49935C11.3332 4.86754 11.0347 5.16602 10.6665 5.16602C10.2983 5.16602 9.99984 4.86754 9.99984 4.49935V3.16602C9.99984 2.9892 9.9296 2.81964 9.80457 2.69461C9.67955 2.56959 9.50998 2.49935 9.33317 2.49935H6.6665ZM3.33317 3.83268C3.70136 3.83268 3.99984 4.13116 3.99984 4.49935V13.8327C3.99984 14.0095 4.07007 14.1791 4.1951 14.3041C4.32012 14.4291 4.48969 14.4993 4.6665 14.4993H11.3332C11.51 14.4993 11.6795 14.4291 11.8046 14.3041C11.9296 14.1791 11.9998 14.0095 11.9998 13.8327V4.49935C11.9998 4.13116 12.2983 3.83268 12.6665 3.83268C13.0347 3.83268 13.3332 4.13116 13.3332 4.49935V13.8327C13.3332 14.3631 13.1225 14.8718 12.7474 15.2469C12.3723 15.622 11.8636 15.8327 11.3332 15.8327H4.6665C4.13607 15.8327 3.62736 15.622 3.25229 15.2469C2.87722 14.8718 2.6665 14.3631 2.6665 13.8327V4.49935C2.6665 4.13116 2.96498 3.83268 3.33317 3.83268Z"
                              fill="#EA2119"/>
                    </svg>
                    <span>Удалить контактное лицо</span>
                </div>
            </div>
            <div className='profile-info-form'>
                <div className="column">
                    <div className="chapter">
                        <p className="title">Личные данные</p>
                        <div className="text-field text-field_floating">
                            <input className="text-field__input" type="fio" id="fio" value={fio}
                                   placeholder="mymail@mail.com" onChange={(e) => handleChangeFio(e)}/>
                            <label className="text-field__label" htmlFor="fio">ФИО <span>*</span></label>
                        </div>
                        <div className="custom-switch">
                            <Switch colorScheme="customGreen"
                                    size='lg'
                                    id='is-main-switch'
                                    value={switchState}
                                    onChange={(e) => handleChangeSwitch(e)}/>
                            <label htmlFor="is-main-switch">Основное контактное лицо</label>
                        </div>

                    </div>
                    <div className="chapter">
                        <p className="title">Контактные данные</p>
                        <div className="text-field text-field_floating">
                            <input className="text-field__input"
                                   type="text"
                                   id="position"
                                   value={userPosition}
                                   placeholder="text" onChange={(e) => handleChangePosition(e)}/>
                            <label className="text-field__label" htmlFor="position">Роль <span>*</span></label>
                        </div>
                        <div className="text-field text-field_floating">
                            <input className="text-field__input"
                                   type="text"
                                   id="tel"
                                   value={userNumber}
                                   placeholder="text" onChange={(e) => handleChangeNumber(e)}/>
                            <label className="text-field__label" htmlFor="tel">Контактный номер телефона <span>*</span></label>
                        </div>
                        <div className="text-field text-field_floating">
                            <input className="text-field__input"
                                   type="text"
                                   id="email"
                                   value={userEmail}
                                   placeholder="text" onChange={(e) => handleChangeEmail(e)}/>
                            <label className="text-field__label" htmlFor="email">Адрес электронной почты</label>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="chapter">
                        <div className="title-row">
                            <p className="title">Почтовый адрес</p>
                            <span className='adress'>Ваш текущий адрес: {userAddress} </span>
                            <span className="btn" onClick={() => setAddressFieldsVisibility(!addressFieldsVisibility)}>Изменить адрес</span>
                        </div>

                        {
                            addressFieldsVisibility && (
                                <>
                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input" type="email" id="country"
                                               placeholder="mymail@mail.com" onChange={() => handleChangeCountry()}/>
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
                                        <label className="text-field__label" htmlFor="street">Улица<span>*</span></label>
                                    </div>

                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input" type="text" id="house"
                                               placeholder="mymail@mail.com" onChange={() => handleChangeHouse()}/>
                                        <label className="text-field__label" htmlFor="house">Дом<span>*</span></label>
                                    </div>
                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input" type="text" id="building"
                                               placeholder="mymail@mail.com" onChange={() => handleChangeBuilding()}/>
                                        <label className="text-field__label" htmlFor="building">Строение/корпус</label>
                                    </div>
                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input" type="text" id="flat"
                                               placeholder="mymail@mail.com" onChange={() => handleChangeFlat()}/>
                                        <label className="text-field__label" htmlFor="flat">Квартира<span>*</span></label>
                                    </div>
                                    <div className="text-field text-field_floating">
                                        <input className="text-field__input" type="text" id="postcode"
                                               placeholder="mymail@mail.com" onChange={() => handleChangePostcode()}/>
                                        <label className="text-field__label" htmlFor="postcode">Индекс</label>
                                    </div>
                                </>
                            )
                        }

                    </div>

                </div>
            </div>
            {
                openModal &&
                <ChangeMainPersonModal open={openModal}
                                       oldPerson={mainPerson?.length ? mainPerson[0]?.fullName : ''}
                                       newPerson={fullName}
                                       close={()=>setOpenModal(false)}/>
            }

        </div>

    );
};

export default EditForm;