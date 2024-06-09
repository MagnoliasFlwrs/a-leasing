import React, { useState } from 'react';
import { Flex } from "@chakra-ui/react";

const ContractSubjects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const filters = ['Все', 'К оплате', 'Оплачен', 'Просрочен', 'Закрыт'];

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
        </Flex>
    );
};

export default ContractSubjects;
