import React from 'react';
import '../../../styles/mobilleFilterModal.css'
import {Select} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

const MobileFiltersModal = () => {
    const hideFilterModal = () => {
        document.querySelector('.mobile-filters-modal').classList.remove('open');
        document.querySelector('.box-shadow').classList.remove('open');
    }
    return (
        <div className='mobile-filters-modal'>
            <div className="head-row">
                <p>Фильтры</p>
                <span className="close-icon" onClick={()=> hideFilterModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="12" fill="#333333"/>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289Z"
                            fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
                            fill="white"/>
                    </svg>
                </span>
            </div>
            <div className="filter-list">
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                        placeholder='Тип заявки'
                >
                    <option value='option1'>Новые</option>
                    <option value='option2'>Старые</option>
                </Select>
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                        placeholder='Статус'
                >
                    <option value='option1'>Новые</option>
                    <option value='option2'>Старые</option>
                </Select>
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                >
                    <option value='option1'>Апрель 2020</option>
                    <option value='option2'>Апрель 2021</option>
                </Select>
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                        placeholder='Предмет лизинга'
                >
                    <option value='option1'>Новые</option>
                    <option value='option2'>Старые</option>
                </Select>
            </div>
            <span className='clear-filters'>Сбросить фильтры</span>
            <button>Показать (18)</button>
        </div>
    );
};

export default MobileFiltersModal;