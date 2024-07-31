import React from 'react';
import '../styles/applicationPage.css'
import FiltersPanel from "../components/applicationPage/FiltersPanel.jsx";
import RequestsTable from "../components/contracts/requests/RequestsTable.jsx";


const ApplicationPageLayout = () => {
    return (
        <div className='application-page-container'>
            <div className="head-row">
                <div className="apply">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="1" width="15" height="15" rx="7.5" stroke="#0070C9"/>
                        <path d="M8 4L8 13" stroke="#0070C9" strokeLinecap="round"/>
                        <path
                            d="M9 8H8.5V9H9V8ZM12 9C12.2761 9 12.5 8.77614 12.5 8.5C12.5 8.22386 12.2761 8 12 8V9ZM9 9L12 9V8L9 8V9Z"
                            fill="#0070C9"/>
                        <path
                            d="M7 8H7.5V9H7V8ZM4 9C3.72386 9 3.5 8.77614 3.5 8.5C3.5 8.22386 3.72386 8 4 8V9ZM7 9H4V8H7V9Z"
                            fill="#0070C9"/>
                    </svg>
                    <span>Создать заявку</span>
                </div>
                <a href='#' className="new-application">
                    Заявка на лизинг
                </a>
            </div>
            <FiltersPanel/>
            <RequestsTable/>
        </div>
    );
};

export default ApplicationPageLayout;