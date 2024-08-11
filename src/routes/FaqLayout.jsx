import React from 'react';
import {useGetFaqCategoriesQuery} from "../services/faq/faq.service.js";
import '../styles/faqPage.css'
import {Spinner, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import FaqChapter from "../components/faqPage/FaqChapter.jsx";
import FaqBlock from "../components/faqPage/FaqBlock.jsx";

const FaqLayout = () => {
    const { data, error, isSuccess } = useGetFaqCategoriesQuery({ limit: 10, page: 1 });
    console.log(data)
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
        <>
            {
                data ?
                    <div className='faq-container'>
                        <Tabs variant='unstyled' width='100%' className='faq-tabs'>
                            <TabList gap='24px' overflowX='auto' className='faq-tablist'>
                                <Tab  {...tabStyle}>Все</Tab>
                                {
                                    data.data.map((item , index) => {
                                        return (
                                            <Tab key={index} {...tabStyle}>{item.name}</Tab>
                                        )
                                    })
                                }
                            </TabList>

                            <TabPanels className='faq-tabpanel'>
                                <TabPanel  style={{padding: '0'}}>
                                    <FaqBlock all={true} allData={data}/>
                                </TabPanel>
                                {
                                    data.data.map((item , index) => {
                                        return (
                                            <TabPanel key={index} style={{padding: '0'}}>
                                                <FaqBlock id={item.id} categoryName={item.name}/>
                                            </TabPanel>

                                        )
                                    })
                                }
                            </TabPanels>
                        </Tabs>
                    </div>
                    :
                    <Spinner size='xl'/>

            }
        </>

    );
};

export default FaqLayout;