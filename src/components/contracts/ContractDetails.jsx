import React from 'react';
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import FinanceBlock from "./FinanceBlock";
import DocumentsBlock from "./documents/DocumentsBlock";
import PaymentSchedule from "./PaymentSchedule.jsx";
import Procuratory from "./Procuratory.jsx";
import RequestsBlock from "./requests/RequestsBlock.jsx";
import InsuranceBlock from "./insurance/InsuranceBlock.jsx";
import CreateNewRequestBlock from "./CreateNewRequestBlock.jsx";

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
            {
                (window.innerWidth < 744) && <a href="/contracts" className='back-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.66663 8.50016C2.66663 8.13197 2.9651 7.8335 3.33329 7.8335H12.6666C13.0348 7.8335 13.3333 8.13197 13.3333 8.50016C13.3333 8.86835 13.0348 9.16683 12.6666 9.16683H3.33329C2.9651 9.16683 2.66663 8.86835 2.66663 8.50016Z"
                              fill="#0070C9"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.47136 3.36177C8.73171 3.62212 8.73171 4.04423 8.47136 4.30458L4.2761 8.49984L8.47136 12.6951C8.73171 12.9554 8.73171 13.3776 8.47136 13.6379C8.21101 13.8983 7.7889 13.8983 7.52855 13.6379L2.86189 8.97124C2.60154 8.71089 2.60154 8.28878 2.86189 8.02843L7.52855 3.36177C7.7889 3.10142 8.21101 3.10142 8.47136 3.36177Z"
                              fill="#0070C9"/>
                    </svg>
                    <span>Назад</span>
                </a>
            }

            <Tabs variant='unstyled' width='100%'>
                <TabList gap='24px' overflowX='auto' className='contract-tablist'>
                    <Tab {...tabStyle}>Финансы</Tab>
                    <Tab {...tabStyle}>Документы</Tab>
                    <Tab {...tabStyle}>График платежей</Tab>
                    <Tab {...tabStyle}>Страховка</Tab>
                    <Tab {...tabStyle}>Доверенности</Tab>
                    <Tab {...tabStyle}>Заявки</Tab>
                </TabList>
                <TabPanels style={{paddingTop: '24px'}}>
                    <TabPanel style={{padding: '0'}}>
                        <FinanceBlock/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <DocumentsBlock/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <PaymentSchedule/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <InsuranceBlock/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <Procuratory/>
                    </TabPanel>
                    <TabPanel style={{padding: '0'}}>
                        <RequestsBlock/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <CreateNewRequestBlock/>
        </Flex>
    );
};

export default ContractDetails;