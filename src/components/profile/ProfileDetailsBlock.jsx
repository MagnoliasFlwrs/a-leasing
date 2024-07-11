import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import PrivateInfo from "./PrivateInfo.jsx";
import GeneralInfoIndividualEntrepreneur from "./GeneralInfoIndividualEntrepreneur.jsx";

const ProfileDetailsBlock = ({data , userType}) => {
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
            {
                userType === 'INDIVIDUAL_ENTREPRENEUR' && (
                    <Tabs variant='unstyled' width='100%'>
                        <TabList gap='24px' overflowX='auto' className='contract-tablist'>
                            <Tab {...tabStyle} className='tab'>Общая информация</Tab>
                            <Tab {...tabStyle} className='tab'>Сведения о деятельности организации</Tab>
                            <Tab {...tabStyle} className='tab'>Сведения о должностных лицах организации</Tab>
                            <Tab {...tabStyle} className='tab'>Административно-финансовая информация</Tab>
                        </TabList>
                        <TabPanels style={{paddingTop: '24px'}}>
                            <TabPanel style={{padding: '0'}}>
                                <GeneralInfoIndividualEntrepreneur data={data?.profile?.generalInfo}/>
                            </TabPanel>
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
                )
            }
            {
                userType === 'NATURAL_PERSON' && (
                    <Tabs variant='unstyled' width='100%'>
                        <TabList gap='24px' overflowX='auto' className='contract-tablist'>
                            <Tab {...tabStyle} className='tab'>Общая информация</Tab>
                            <Tab {...tabStyle} className='tab'>Сведения о деятельности организации</Tab>
                            <Tab {...tabStyle} className='tab'>Сведения о должностных лицах организации</Tab>
                            <Tab {...tabStyle} className='tab'>Административно-финансовая информация</Tab>
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
                            <TabPanel style={{padding: '0'}}>
                                <PrivateInfo/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                )
            }
            {
                userType === 'LEGAL_PERSON' && (
                    <Tabs variant='unstyled' width='100%'>
                        <TabList gap='24px' overflowX='auto' className='contract-tablist'>
                            <Tab {...tabStyle} className='tab'>Общая информация</Tab>
                            <Tab {...tabStyle} className='tab'>Сведения о деятельности организации</Tab>
                            <Tab {...tabStyle} className='tab'>Сведения о должностных лицах организации</Tab>
                            <Tab {...tabStyle} className='tab'>Административно-финансовая информация</Tab>
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
                            <TabPanel style={{padding: '0'}}>
                                <PrivateInfo/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                )
            }
        </div>
    );
};

export default ProfileDetailsBlock;