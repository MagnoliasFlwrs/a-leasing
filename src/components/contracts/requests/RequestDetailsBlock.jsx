import React from 'react';

const RequestDetailsBlock = () => {
    return (
        <div className='request-details'>
            <p className='title'>Дополнение к заявке</p>
            <div className="text">
                <span>Название заявки</span>
                <p>Доверенность на регистрацию предмета лизинга от 11.01.2020</p>
            </div>
            <div className="text">
                <span>Комментарий менеджера</span>
                <p>Текст комментария менеджера Текст комментария менеджера
                    Текст комментария менеджера Текст комментария менеджера Текст комментария менеджера </p>
            </div>
            <div className="comment-wrap">
                <span>Введите запрашиваемые данные</span>
                <textarea placeholder='Комментарий'></textarea>
            </div>
            <button>Отправить дополнение</button>
        </div>
    );
};

export default RequestDetailsBlock;