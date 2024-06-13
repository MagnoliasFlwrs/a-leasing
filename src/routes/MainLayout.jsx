import React from 'react';
import '../styles.css';
import {Flex} from "@chakra-ui/react";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
const MainLayout = () => {
    return (
       <Flex style={{minHeight: '100vh' , height: '100%' , flexDirection: 'column'}}>
           <Header/>
           <Outlet/>
       </Flex>
    );
};

export default MainLayout;