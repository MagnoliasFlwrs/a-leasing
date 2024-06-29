import React from 'react';
import '../../styles/newRequestBlock.css'
import NewRequestTypeItem from "./requests/NewRequestTypeItem.jsx";

const CreateNewRequestBlock = () => {
    const arr = ['Доверенности' , 'Допсоглашения' , 'Запрос документов' , 'Взаиморасчеты' , 'Иное']
    return (
        <div className='new-request-block'>
            <div className="back-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2.66675 8.49967C2.66675 8.13148 2.96522 7.83301 3.33341 7.83301H12.6667C13.0349 7.83301 13.3334 8.13148 13.3334 8.49967C13.3334 8.86786 13.0349 9.16634 12.6667 9.16634H3.33341C2.96522 9.16634 2.66675 8.86786 2.66675 8.49967Z"
                          fill="#0070C9"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.47149 3.36225C8.73184 3.6226 8.73184 4.04471 8.47149 4.30506L4.27622 8.50033L8.47149 12.6956C8.73184 12.9559 8.73184 13.378 8.47149 13.6384C8.21114 13.8987 7.78903 13.8987 7.52868 13.6384L2.86201 8.97173C2.60166 8.71138 2.60166 8.28927 2.86201 8.02892L7.52868 3.36225C7.78903 3.1019 8.21114 3.1019 8.47149 3.36225Z"
                          fill="#0070C9"/>
                </svg>
                <span>Вернуться к списку заявкок</span>
            </div>
            <div className="request-table">
                {
                    arr.map((item , i) => {
                        return <NewRequestTypeItem data={item} key={i}/>
                    })
                }
            </div>
        </div>
    );
};

export default CreateNewRequestBlock;