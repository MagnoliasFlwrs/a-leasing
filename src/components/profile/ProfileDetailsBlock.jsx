import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import PrivateInfo from "./PrivateInfo.jsx";

const ProfileDetailsBlock = () => {
    const tabStyle = {
        borderRadius: '30px',
        bg: 'rgba(51, 51, 51, 0.06)',
        color: '#333',
        fontSize: '13px',
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
        <div className='profile-details-container'>
            <h2>Моя анкета</h2>
            <Tabs variant='unstyled' width='100%'>
                <TabList gap='24px' overflowX='auto' className='contract-tablist'>
                    <Tab {...tabStyle}>Личные данные</Tab>
                    <Tab {...tabStyle}>Место работы и доход</Tab>
                    <Tab {...tabStyle}>Имущество в собсвенности</Tab>
                </TabList>
                <TabPanels style={{paddingTop: '24px'}}>
                    <TabPanel style={{padding: '0'}}>
                        <PrivateInfo/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <PrivateInfo/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <PrivateInfo/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default ProfileDetailsBlock;