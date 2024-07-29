import React from 'react';
import {Spinner, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import EditForm from "./EditForm.jsx";

const UlTabs = ({profile , mainperson}) => {
    const tabStyle = {
        borderRadius: '30px',
        color: '#333',
        fontSize: '12px',
        p: '6px 12px',
        whiteSpace:'nowrap',
        _selected: {
            color: 'white',
            bg: '#333',
            padding: '6px 12px',
            borderRadius: '30px'
        }
    };
    return (
        <div className='ul-edit-block'>
            {
                profile ?
                    <Tabs variant='unstyled' width='100%' className='ul-edit-tabs'>
                        <TabList gap='24px' flexWrap='wrap' className='contract-tablist'>
                            {
                                profile.map((item , index) => {
                                    return (
                                        <Tab {...tabStyle} key={index} className='tab'>{item.position}</Tab>
                                    )
                                })
                            }
                            {
                                profile.length < 3 &&
                                <div className='add-tab'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#0070C9"/>
                                        <path d="M8 3.5L8 12.5" stroke="#0070C9" strokeLinecap="round"/>
                                        <path
                                            d="M9 7.5H8.5V8.5H9V7.5ZM12 8.5C12.2761 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.2761 7.5 12 7.5V8.5ZM9 8.5L12 8.5V7.5L9 7.5V8.5Z"
                                            fill="#0070C9"/>
                                        <path
                                            d="M7 7.5H7.5V8.5H7V7.5ZM4 8.5C3.72386 8.5 3.5 8.27614 3.5 8C3.5 7.72386 3.72386 7.5 4 7.5V8.5ZM7 8.5H4V7.5H7V8.5Z"
                                            fill="#0070C9"/>
                                    </svg>
                                    Добавить контактное лицо
                                </div>
                            }
                        </TabList>
                        <TabPanels style={{paddingTop: '24px'}}>
                            {
                                profile.map((item , index) => {
                                    return (
                                        <TabPanel key={index} style={{padding: '0'}}>
                                            <EditForm person={item} mainPerson={mainperson}/>
                                        </TabPanel>
                                    )
                                })
                            }
                        </TabPanels>
                    </Tabs>
                    :
                    <Spinner size='xl'/>
            }

        </div>
    );
};

export default UlTabs;