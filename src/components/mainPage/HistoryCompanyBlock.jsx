import React from 'react';
import greek from '../../images/aesthetic-background-with-greek-bust 1.png'
import {Spinner, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

const HistoryCompanyBlock = ({data}) => {

    const tabStyle = {
        borderRadius: '30px',
        bg: 'rgba(149, 149, 149, 0.10);',
        color: '#959595',
        fontSize: '17px',
        p: '6px 12px',
        whiteSpace:'nowrap',
        _hover:{
            bg: 'rgba(149, 149, 149, 0.50);',
            color: 'white',
        },
        _selected: {
            color: 'white',
            bg: '#333',
            padding: '6px 12px',
            borderRadius: '30px'
        }
    };
    return (
        <>
            {
                data ?
                    <div className='history-block'>
                        <div className="title-row">
                            <h2>История компании</h2>
                        </div>
                        <div className="tabs-container">
                            <Tabs className='history-tabs' variant='unstyled' width='100%'>
                                <TabList gap='24px' overflowX='auto' className='history-tablist'>
                                    {
                                        data?.data.map((item , index) => {
                                            return (
                                                <Tab key={index} {...tabStyle}>{item.year}</Tab>
                                            )
                                        })
                                    }

                                </TabList>

                                <TabPanels>
                                    {
                                        data?.data.map((item , index) => {
                                            return (
                                                <TabPanel key={index} style={{padding: '0'}}>
                                                    <ul>
                                                        <li>{item.info}</li>
                                                    </ul>
                                                </TabPanel>
                                            )
                                        })
                                    }

                                </TabPanels>
                            </Tabs>
                            <img src={greek} alt="image"/>
                        </div>
                    </div>
                    :
                    <Spinner size='xl'/>
            }
        </>

    );
};

export default HistoryCompanyBlock;