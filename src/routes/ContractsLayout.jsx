import React from 'react';
import {Flex} from "@chakra-ui/react";
import ContractSubjects from "../components/contracts/ContractSubjects";
import ContractDetails from "../components/contracts/ContractDetails";

const ContractsLayout = () => {
    return (
        <Flex className='contracts-container'>
            <ContractSubjects/>
            <ContractDetails/>
        </Flex>
    );
};

export default ContractsLayout;