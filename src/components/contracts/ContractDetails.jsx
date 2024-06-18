import React from 'react';
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import FinanceBlock from "./FinanceBlock";
import PaymentBlock from "./PaymentBlock";
import DocumentsBlock from "./documents/DocumentsBlock";
import CustomModal from "./documents/CustomModal.jsx";

const ContractDetails = () => {
    const tabStyle = {
        borderRadius: '30px',
        bg: 'white',
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
        <Flex className='subject-details-container'>
            <Tabs variant='unstyled' width='100%'>
                <TabList gap='24px' overflowX='auto'>
                    <Tab {...tabStyle}>Финансы</Tab>
                    <Tab {...tabStyle}>Документы</Tab>
                    <Tab {...tabStyle}>График платежей</Tab>
                    <Tab {...tabStyle}>Страховка</Tab>
                    <Tab {...tabStyle}>Доверенности</Tab>
                    <Tab {...tabStyle}>Заявки</Tab>
                </TabList>
                <TabPanels style={{paddingTop:'24px'}}>
                    <TabPanel style={{padding:'0'}}>
                        <FinanceBlock/>
                    </TabPanel>
                    <TabPanel style={{padding:'0'}}>
                        <DocumentsBlock/>
                        <CustomModal/>
                    </TabPanel>
                    <TabPanel style={{padding:'0'}}>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel style={{padding:'0'}}>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel style={{padding:'0'}}>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel style={{padding:'0'}}>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default ContractDetails;