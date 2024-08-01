import React, {useEffect, useState} from 'react';
import {Checkbox, Select, Switch} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import CustomSelect from "../CustomSelect.jsx";

const BuildingsBlock = () => {
    const [switchState , setSwitchState] = useState(false);
    const [isActive, setIsActive] = useState(window.innerWidth < 1133);
    const [mileage , setMileage] = useState('');
    const [price , setPrice] = useState('');
    const [currency , setCurrency] = useState('');
    const [model , setModal] = useState('');
    const [car , setCar] = useState('');
    const [year , setYear] = useState('');
    const [openSelect, setOpenSelect] = useState(null);
    const [name , setName] = useState('');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 743) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleToggleSelect = (selectName) => {
        setOpenSelect(openSelect === selectName ? null : selectName);
    };

    const options = [
        { value: 'Новые', label: 'Новые' },
        { value: 'Старые', label: 'Старые' },
    ];
    const handleChangeSwitch = (e)=> {
        const { value } = e.target;
        setSwitchState(value);
    }
    const handleChangeMileage =(e)=> {
        const { value } = e.target;
        setMileage(value);
    }
    const handleChangePrice = (e) => {
        const { value } = e.target;
        setPrice(value);
    }
    const handleChangeName =(e)=> {
        const { value } = e.target;
        setName(value);
    }
    return (
        <div className='new-appl-block'>
            <div className="chapter">
                <p className="title">Информация о предмете лизинга</p>
                <div className="custom-switch">
                    <Switch colorScheme="customGreen"
                            size='lg'
                            id='is-new-switch'
                            value={switchState}
                            onChange={(e) => handleChangeSwitch(e)}/>
                    <label htmlFor="is-new-switch">Новый</label>
                </div>
                <div className="row">

                    {
                        isActive ?
                            <Select className='document-container-select'
                                    icon={<ChevronDownIcon/>}
                            >
                                <option value='option1'>Новые</option>
                                <option value='option2'>Старые</option>
                            </Select>
                            :
                            <CustomSelect options={options}
                                          value={car}
                                          onChange={setCar}
                                          isOpen={openSelect === 'car'}
                                          onToggle={() => handleToggleSelect('car')}
                                          label='Тип помещения'/>

                    }

                    <input className='appl-form-input' type="text"
                           value={mileage}
                           onChange={(e) => handleChangeMileage(e)}
                           placeholder="Площадь"
                    />
                    <input className='appl-form-input address' type="text"
                           value={name}
                           onChange={(e) => handleChangeName(e)}
                           placeholder="Адрес"
                    />

                </div>
            </div>
            <div className="chapter">
                <p className="title">Валюта и стоимость</p>
                <div className="row">
                    <input className='appl-form-input' type="text"
                           value={price}
                           onChange={(e) => handleChangePrice(e)}
                           placeholder="Стоимость"
                    />
                    {
                        isActive ?
                            <Select className='document-container-select'
                                    icon={<ChevronDownIcon/>}
                            >
                                <option value='option1'>Новые</option>
                                <option value='option2'>Старые</option>
                            </Select>
                            :
                            <CustomSelect options={options}
                                          value={currency}
                                          onChange={setCurrency}
                                          isOpen={openSelect === 'currency'}
                                          onToggle={() => handleToggleSelect('currency')}
                                          label='Доллар США'/>

                    }
                    <Checkbox colorScheme='red'>
                        С НДС
                    </Checkbox>


                </div>
            </div>
            <div className="chapter">
                <div className="text-row">
                    <p className="title">Авансовый платеж</p>
                    <span>Платеж, уплачиваемый до начала срока лизинга.</span>
                </div>

                <div className="row">
                    <input className='appl-form-input' type="text"
                           value={price}
                           onChange={(e) => handleChangePrice(e)}
                           placeholder="Стоимость"
                    />
                    <div className="txt">
                        <p className='green'>40% </p>
                        <span>Платеж не должен превышать 10%</span>
                    </div>
                </div>
            </div>
            <div className="chapter">
                <div className="text-row">
                    <p className="title">Выкупной платеж</p>
                    <span>Завершающий платеж. Часть стоимости предмета лизинга, которую необходимо уплатить <br/> для совершения выкупа предмета лизинга в собственность лизингополучателя.</span>
                </div>

                <div className="row">
                    <input className='appl-form-input' type="text"
                           value={price}
                           onChange={(e) => handleChangePrice(e)}
                           placeholder="Стоимость"
                    />
                    <div className="txt">
                        <p className='red'>23% </p>
                        <span>Платеж не должен превышать 10%</span>
                    </div>
                </div>
            </div>
            <div className="chapter">
                <div className="text-row">
                    <p className="title">Срок лизинга</p>
                    <span>Период времени со дня передачи имущества в лизинг лизингополучателю по день выкупа предмета лизинга.</span>
                </div>

                <div className="row">
                    <input className='appl-form-input' type="text"
                           value={price}
                           onChange={(e) => handleChangePrice(e)}
                           placeholder="Стоимость"
                    />
                    <div className="txt">
                        <p className='green'>40% </p>
                        <span>Платеж не должен превышать 10%</span>
                    </div>
                </div>
            </div>
            <div className="chapter">
                <p className="title">Цель использования</p>
                <div className="row">
                    {
                        isActive ?
                            <Select className='document-container-select'
                                    icon={<ChevronDownIcon/>}
                            >
                                <option value='option1'>Новые</option>
                                <option value='option2'>Старые</option>
                            </Select>
                            :
                            <CustomSelect options={options}
                                          value={car}
                                          onChange={setCar}
                                          isOpen={openSelect === 'car'}
                                          onToggle={() => handleToggleSelect('car')}
                                          label='Личное'/>

                    }

                </div>
            </div>
            <div className="add-new-application">
                <span>Вы будете перенаправлены в личный кабинет МСИ.</span>
                <a href="#">Отправить заявку</a>
            </div>
        </div>
    );
};

export default BuildingsBlock;