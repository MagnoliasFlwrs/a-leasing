import React, {useEffect, useState} from 'react';
import '../../../styles/requests.css'
import {ChevronDownIcon} from "@chakra-ui/icons";
import {Select} from "@chakra-ui/react";
import RequestsTable from "./RequestsTable.jsx";

const RequestsBlock = () => {
    const [openFilters , setOpenFilters] = useState(false);

    const openFiltersHandler = () => {
        if (window.innerWidth > 743) {
            if (openFilters) {
                setOpenFilters(false)
            } else {
                setOpenFilters(true)
            }
        } else {
            document.querySelector('.mobile-filters-modal').classList.add('open');
            document.querySelector('.box-shadow').classList.add('open');
        }

    }

    const [isActive, setIsActive] = useState(window.innerWidth < 1133);

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

    const showCreateRequestModal = ()=> {
        document.querySelector('.new-request-block').classList.add('open');
    }

    return (
        <div className='requests-block'>
            <div className="apply" onClick={() => showCreateRequestModal()}>
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
                <span>Заказать документ</span>
            </div>
            <div className="filters-block">
                <div className="row">
                    <div className="filters-btn"
                         onClick={() => openFiltersHandler()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23Z"
                                  fill="black" fillOpacity="0.4"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8 14C8 13.4477 8.44772 13 9 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H9C8.44772 15 8 14.5523 8 14Z"
                                  fill="black" fillOpacity="0.4"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8 10C8 9.44772 8.44772 9 9 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10Z"
                                  fill="black" fillOpacity="0.4"/>
                        </svg>
                        <span>{isActive ? 'Фильтры' : 'Показать фильтры'}</span>
                    </div>
                    <Select className='document-container-select'
                            icon={<ChevronDownIcon/>}
                            width='161px'
                    >
                        <option value='option1'>Новые</option>
                        <option value='option2'>Старые</option>
                    </Select>
                </div>
                <div className={openFilters ? 'filter-row open' : 'filter-row'}>
                    <Select className='document-container-select'
                            icon={<ChevronDownIcon/>}
                            placeholder='Тип заявки'
                            width='206px'
                    >
                        <option value='option1'>Новые</option>
                        <option value='option2'>Старые</option>
                    </Select>
                    <Select className='document-container-select'
                            icon={<ChevronDownIcon/>}
                            width='206px'
                            placeholder='Статус'
                    >
                        <option value='option1'>Новые</option>
                        <option value='option2'>Старые</option>
                    </Select>
                    <Select className='document-container-select'
                            icon={<ChevronDownIcon/>}
                            width='206px'
                    >
                        <option value='option1'>Апрель 2020</option>
                        <option value='option2'>Апрель 2021</option>
                    </Select>
                    <Select className='document-container-select'
                            icon={<ChevronDownIcon/>}
                            width='206px'
                            placeholder='Предмет лизинга'
                    >
                        <option value='option1'>Новые</option>
                        <option value='option2'>Старые</option>
                    </Select>
                </div>
                <RequestsTable/>
            </div>
        </div>
    );
};

export default RequestsBlock;