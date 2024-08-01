import React, {useEffect, useState} from 'react';
import {Checkbox, Select} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import RequestsTable from "../contracts/requests/RequestsTable.jsx";
import CustomSelect from "../CustomSelect.jsx";

const FiltersPanel = () => {
    const [openFilters , setOpenFilters] = useState(false);
    const [newApplSort , setNewApplSort] = useState('')

    const openFiltersHandler = () => {
        if (window.innerWidth > 745) {
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
    const options = [
        { value: 'Новые', label: 'Новые' },
        { value: 'Старые', label: 'Старые' },
    ];

    return (
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
                <div className="sort-1">
                    Сортировать
                    {
                        isActive ?
                            <Select className='document-container-select'
                                    icon={<ChevronDownIcon/>}
                                    width='161px'
                            >
                                <option value='option1'>Новые</option>
                                <option value='option2'>Старые</option>
                            </Select>
                            :
                            <CustomSelect options={options}
                                          value={newApplSort}
                                          onChange={setNewApplSort}
                                          label='Новые'/>
                    }
                </div>
                <Checkbox colorScheme='red' >
                    Показать только заявки на лизинг
                </Checkbox>



            </div>
            {
                isActive ?
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
                    :
                    <div className={openFilters ? 'filter-row open' : 'filter-row'}>
                        <CustomSelect options={options}
                                      value={newApplSort}
                                      onChange={setNewApplSort}
                                      label='Тип заявки'/>
                        <CustomSelect options={options}
                                      value={newApplSort}
                                      onChange={setNewApplSort}
                                      label='Статус'/>
                        <CustomSelect options={options}
                                      value={newApplSort}
                                      onChange={setNewApplSort}
                                      label='Месяц'/>
                        <CustomSelect options={options}
                                      value={newApplSort}
                                      onChange={setNewApplSort}
                                      label='Предмет лизинга'/>

                    </div>
            }

        </div>
    );
};

export default FiltersPanel;