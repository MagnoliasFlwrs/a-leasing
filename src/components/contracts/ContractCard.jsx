import React from 'react';
import {Flex} from "@chakra-ui/react";

const ContractCard = ({ className, onClick }) => {
    return (
        <Flex className={`contract-card ${className}`} onClick={onClick}>
            <div className="column-1">
                <p className="subject-type">Автомобиль</p>
                <p className="subject-title">Mazda 3</p>
                <span className='more-subjects'>еще 2 предмета</span>
                <span className="contract-name">ФЛ000-00</span>
            </div>
            <div className="column-2">
                <p className="status good">Оплачено</p>
                <div className="payment">
                    <p>$ 345.17</p>
                    <span>до 12.04.2024</span>
                </div>
            </div>
        </Flex>
    );
};

export default ContractCard;