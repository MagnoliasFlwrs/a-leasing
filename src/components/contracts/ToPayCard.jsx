import React from 'react';
import {Flex} from "@chakra-ui/react";
import logo from '../../images/erip.png'

const ToPayCard = () => {


    return (
        <Flex className='to-pay-card' direction='column' gap='10px'>
            <Flex justify='space-between' gap='20px' flexGrow='1'>
                <Flex direction='column' className='date-column'>
                    <p>К оплате</p>
                    <span>до 12.04.2024</span>
                </Flex>
                <p className="price">$ 345.17</p>
            </Flex>
            <Flex justify='space-between' gap='20px' align='center'>
                <img src={logo} style={{flexShrink: 0}} alt="erip-logo" width='74' height='25'/>
                <button className='redBtn' type='button'>Оплатить</button>
            </Flex>
        </Flex>
    );
};

export default ToPayCard;