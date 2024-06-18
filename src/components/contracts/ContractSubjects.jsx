import React, { useState } from 'react';
import { Flex } from "@chakra-ui/react";
import ContractCard from "./ContractCard";

const ContractSubjects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);


    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const handleCardClick = (i) => {
        setActiveIndex2(i);
    }


    const filters = ['Все', 'К оплате', 'Оплачен', 'Просрочен', 'Закрыт'];
    const array = [0, 1, 2];

    return (
        <Flex className='contracts-subject-container'>
            <ul className="filters">
                {filters.map((filter, index) => (
                    <li
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleItemClick(index)}
                    >
                        {filter}
                    </li>
                ))}
            </ul>
            <div className="subject-cards">
                {
                    array.map((index) =>
                        <ContractCard key={index}
                                      className={activeIndex2 === index ? 'active' : ''}
                                      onClick={() => handleCardClick(index)}
                        />
                    )
                }

            </div>
            <button className="new-leasing-subject" type='button'>Оставить заявку на лизинг</button>
        </Flex>
    );
};

export default ContractSubjects;
