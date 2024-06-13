import React from 'react';
import {Flex} from "@chakra-ui/react";
import SubjectSlider from "./SubjectSlider";
import FinancePaymentDetails from "./FinancePaymentDetails";
import ToPayCard from "./ToPayCard";
import PaymentBlock from "./PaymentBlock";

const FinanceBlock = () => {
    return (
        <Flex direction='column' gap='56px' width='100%'>
            <Flex gap='24px'  className='finance-cont'>
                <Flex  className='finance-block-col'>
                    <SubjectSlider/>
                    <ToPayCard/>
                </Flex>
                <FinancePaymentDetails/>
            </Flex>
            <PaymentBlock/>
        </Flex>
    );
};

export default FinanceBlock;