import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import PrivateInfoNaturalPerson from "./PrivateInfoNaturalPerson.jsx";
import GeneralInfoIndividualEntrepreneur from "./GeneralInfoIndividualEntrepreneur.jsx";
import WorkingPlaceNaturalPerson from "./WorkingPlaceNaturalPerson.jsx";
import PropertyNaturalPerson from "./PropertyNaturalPerson.jsx";
import OrganizationInfoIp from "./OrganizationInfoIP.jsx";
import IPAdminisrtativeInfo from "./IPAdminisrtativeInfo.jsx";
import ULAdministrativeInfo from "./ULAdministrativeInfo.jsx";
import ULGeneralInfo from "./ULGeneralInfo.jsx";
import ULActivityOrganizationInfo from "./ULActivityOrganizationInfo.jsx";
import ULOfficials from "./ULOfficials.jsx";

const ProfileDetailsBlock = ({profile , userType}) => {
    const tabStyle = {
        borderRadius: '30px',
        bg: 'rgba(51, 51, 51, 0.06)',
        color: '#333',
        fontSize: '13px',
        p: '6px 12px',
        whiteSpace:'nowrap',
        _hover: {
            bg: 'rgba(51, 51, 51, 0.2)',
        },
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
                            <Tab {...tabStyle} className='tab'>Административно-финансовая информация</Tab>
                        </TabList>
                        <TabPanels >
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <GeneralInfoIndividualEntrepreneur data={profile?.profile?.generalInfo}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <OrganizationInfoIp data={profile?.profile}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <IPAdminisrtativeInfo data={profile?.profile}/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                )
            }
            {
                userType === 'NATURAL_PERSON' && (
                    <Tabs variant='unstyled' width='100%'>
                        <TabList gap='24px' overflowX='auto' className='contract-tablist'>
                            <Tab {...tabStyle} className='tab'>Личные данные</Tab>
                            <Tab {...tabStyle} className='tab'>Место работы и доход</Tab>
                            <Tab {...tabStyle} className='tab'>Имущество в собсвенности</Tab>
                        </TabList>
                        <TabPanels >
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <PrivateInfoNaturalPerson data={profile?.profile}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <WorkingPlaceNaturalPerson data={profile?.profile}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <PropertyNaturalPerson data={profile?.profile}/>
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
                        <TabPanels >
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <ULGeneralInfo data={profile?.profile}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <ULActivityOrganizationInfo data={profile?.profile}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <ULOfficials data={profile?.profile}/>
                            </TabPanel>
                            <TabPanel style={{padding: '0', paddingBottom:'30px'}}>
                                <ULAdministrativeInfo data={profile?.profile}/>
                            </TabPanel>
                        </TabPanels>

                    </Tabs>
                )
            }
        </div>
    );
};

export default ProfileDetailsBlock;