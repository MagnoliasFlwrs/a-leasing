import React, {useState} from 'react';
import {Checkbox} from "@chakra-ui/react";

const ProcuratoryForm = () => {
    const [linkActivity , setLinkActivity] = useState(false);

    return (
        <div className='procuratory-form'>
            <div className="title-block">
                <p>Доверенность на пересечение государственной границы</p>
                <span>Для формирования доверенности необходимо ввести данные лица, на которое оформляется доверенность</span>
            </div>
            <div className="form-block">
                <div className="text">
                    <p>Введите запрашиваемые данные</p>
                    <span>Все поля обязательны для заполнения</span>
                </div>

                <input type="text" placeholder='Фамилия Имя Отчество'/>
                <input type="text" placeholder='Номер паспорта'/>
                <input type="text" placeholder='Место выдачи'/>
                <input type="text" placeholder='Дата выдачи'/>
                <input type="text" placeholder='Адрес регистрации'/>
                <input type="text" placeholder='Личный номер'/>

                <Checkbox colorScheme='red' defaultChecked>
                    Если необходимо согласие
                </Checkbox>

                <a href="/new-document-confirm" className={linkActivity ? 'disabled' : 'red'}>Сформировать доверенность</a>
            </div>
        </div>
    );
};

export default ProcuratoryForm;