import React, {useState} from 'react';

const OtherRequestForm = () => {
    const [linkActivity , setLinkActivity] = useState(false);
    return (
        <div className='other-request-form'>
            <div className="title-block">
                <p>Иное</p>
                <span>Опишите ваш запрос</span>
            </div>
            <textarea placeholder='Введите ваш запрос'></textarea>
            <a href="/new-document" className={linkActivity ? 'disabled' : 'red'}>Сформировать доверенность</a>
        </div>
    );
};

export default OtherRequestForm;