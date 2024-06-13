import React from 'react';
import {Flex} from "@chakra-ui/react";
import PaymentInfo from "./PaymentInfo";
import PaymentHistory from "./PaymentHistory";

const PaymentBlock = () => {
    return (
        <Flex gap='24px' className='payment-container'>
            <PaymentInfo/>
            <PaymentHistory/>
        </Flex>
    );
};

export default PaymentBlock;