import React from 'react';
import '../styles.css';
import {Flex} from "@chakra-ui/react";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import CustomModal from "../components/contracts/documents/CustomModal.jsx";
import DeleteModal from "../components/contracts/documents/DeleteModal.jsx";
import MobileFiltersModal from "../components/contracts/requests/MobileFiltersModal.jsx";
import NewRequestModal from "../components/contracts/requests/NewRequestModal.jsx";
const MainLayout = () => {
    const hideModal = () => {
        document.querySelector('.custom-modal').classList.remove('open');
        document.querySelector('.overlay').classList.remove('open');
    }
    const hideFilterModal = () => {
        document.querySelector('.mobile-filters-modal').classList.remove('open');
        document.querySelector('.box-shadow').classList.remove('open');
    }
    return (
       <Flex style={{height: '100vh' , overflow:'hidden', flexDirection: 'column'}}>
           <div className="overlay" onClick={()=>hideModal()}></div>
           <div className="box-shadow" onClick={()=>hideFilterModal()}></div>
           <Header/>
           <Outlet/>
           <CustomModal/>
           <DeleteModal/>
           <MobileFiltersModal/>
           <NewRequestModal/>
       </Flex>
    );
};

export default MainLayout;