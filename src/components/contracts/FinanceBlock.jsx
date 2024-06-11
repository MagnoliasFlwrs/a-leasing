import React from 'react';
import {Flex} from "@chakra-ui/react";
import SubjectSlider from "./SubjectSlider";
import FinancePaymentDetails from "./FinancePaymentDetails";
import ToPayCard from "./ToPayCard";
import PaymentBlock from "./PaymentBlock";

const FinanceBlock = () => {
    return (
        <Flex direction='column' gap='56px' width='100%'>
            <Flex gap='24px' >
                <Flex direction='column' gap='12px' width='390px'>
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