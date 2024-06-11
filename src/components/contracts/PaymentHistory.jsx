import React from 'react';
import {
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import PaymentHistoryBox from "./PaymentHistoryBox";

const PaymentHistory = () => {
    const years = [2020, 2021, 2022, 2023, 2024];
    const tabStyle = {
        borderRadius: '30px',
        bg: 'white',
        color: '#333',
        fontSize: '13px',
        p: '6px 12px',
        whiteSpace: 'nowrap',
        _selected: {
            color: 'white',
            bg: '#333',
            padding: '6px 12px',
            borderRadius: '30px'
        }
    };

    return (
        <Flex className='payment-history-block' direction="column" flexGrow='1'>
            <p className='title'>Информация по платежам</p>
            <Tabs variant='unstyled' width='100%'>
                <TabList gap='24px' overflowX='auto'>
                    {years.map((item, i) => (
                        <Tab key={i} {...tabStyle}>{item}</Tab>
                    ))}
                </TabList>
                <TabPanels pt='24px'>
                    {years.map((year, index) => (
                        <TabPanel key={index} p='0' width='100%'>
                            <PaymentHistoryBox/>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default PaymentHistory;
