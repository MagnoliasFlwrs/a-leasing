import React from 'react';
import '../../../styles/deletemodal.css';

const DeleteModal = () => {
    return (
        <div className='delete-modal'>
            <p>Удалить?</p>
            <span>При удалении файла <br/>
у вас не будет возможности его восстановить</span>
            <div className="btns">
                <button className="red-btn">Удалить</button>
                <button className="btn">Отмена</button>
            </div>
        </div>
    );
};

export default DeleteModal;