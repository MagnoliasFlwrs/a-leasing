import React from 'react';
import RequestItem from "./RequestItem.jsx";

const RequestsTable = () => {
    return (
        <div className='requests-table'>
            <div className="requests-table-head">
                <p className="date">Дата подачи</p>
                <p className="title">Название документа</p>
                <p className="status-changing">Изменение статуса</p>
                <p className="status">Статус заявки</p>
            </div>
            <ul className="request-list">
                <li>
                    <RequestItem/>
                </li>
            </ul>
        </div>
    );
};

export default RequestsTable;