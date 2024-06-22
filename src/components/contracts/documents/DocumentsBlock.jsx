import React from 'react';
import {Flex, Select} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import DocumentItem from "./DocumentItem";

const DocumentsBlock = () => {
    const arr = ['Договор лизинга' , 'Договор купли-продажи' , 'Согласие на обработку персональных данных' , 'Согласие на ФСЗН' , 'Согласие на кредитную историю' , 'Техпаспорт'];
    return (
        <Flex className='documents-container'>
            <div className="document-container-block-select">
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                        width='206px'
                >
                    <option value='option1'>Предмет лизинга</option>
                    <option value='option2'>Предмет лизинга 2</option>
                    <option value='option3'>Предмет лизинга 3</option>
                </Select>
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                        width='206px'
                >
                    <option value='option1'>Апрель 2020</option>
                    <option value='option2'>Апрель 2021</option>
                    <option value='option3'>Апрель 2022</option>
                </Select>
            </div>
            <ul className="document-container-list">
                {
                    arr.map((item , i) => {
                        return (
                            <DocumentItem key={i} data={item}/>
                        )
                    })
                }
            </ul>
        </Flex>
    );
};

export default DocumentsBlock;