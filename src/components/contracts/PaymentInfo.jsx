import React from 'react';
import {Flex} from "@chakra-ui/react";

const PaymentInfo = () => {
    return (
        <Flex className='payment-info-block'>
            <p className='title'>Информация по платежам</p>
            <Flex className='payment-info-container'>
                <div className="row">
                    <div className="col">
                        <p>Остаток платежей по договору</p>
                        <span>Сумма оставшихся платежей</span>
                    </div>
                    <p className="price">$ 12900.17</p>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Доступный остаток</p>
                        <span>Сумма переплаты</span>
                    </div>
                    <p className="price">$ 0</p>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Всего оплачено</p>
                        <span>Сумма внесенных платежей</span>
                    </div>
                    <p className="price">$ 3450.98</p>
                </div>
            </Flex>
        </Flex>
    );
};

export default PaymentInfo;