import React from 'react';
import { Flex} from "@chakra-ui/react";
import '../../../styles/customModal.css';
import agreement from '../../../images/agreement.png'
import CustomAccordeon from "./CustomAccordeon.jsx";
import EditDocuments from "./EditDocuments.jsx";
import RequestDetailsBlock from "../requests/RequestDetailsBlock.jsx";
import InsuranceModalBlock from "../insurance/InsuranceModalBlock.jsx";


const CustomModal = () => {
    const hideModal = () => {
        document.querySelector('.custom-modal').classList.remove('open');
        document.querySelector('.overlay').classList.remove('open');
    }
    return (
        <Flex className='custom-modal'>
            <Flex className='custom-modal-head'>
                <div className="close-icon" style={{cursor:'pointer'}} onClick={()=> hideModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#333333"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
                              fill="white"/>
                    </svg>
                </div>
                <div className="download-icon" style={{cursor:'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.86195 10.862C5.1223 10.6017 5.54441 10.6017 5.80476 10.862L8.00002 13.0573L10.1953 10.862C10.4556 10.6017 10.8777 10.6017 11.1381 10.862C11.3984 11.1224 11.3984 11.5445 11.1381 11.8048L8.47142 14.4715C8.21108 14.7318 7.78897 14.7318 7.52862 14.4715L4.86195 11.8048C4.6016 11.5445 4.6016 11.1224 4.86195 10.862Z"
                              fill="#333333"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.99998 7.33325C8.36817 7.33325 8.66665 7.63173 8.66665 7.99992V13.9999C8.66665 14.3681 8.36817 14.6666 7.99998 14.6666C7.63179 14.6666 7.33331 14.3681 7.33331 13.9999V7.99992C7.33331 7.63173 7.63179 7.33325 7.99998 7.33325Z"
                              fill="#333333"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.77839 1.32956C6.68538 1.29694 7.58795 1.47051 8.41815 1.83719C9.24835 2.20387 9.98456 2.75411 10.5713 3.44648C11.045 4.00539 11.4113 4.64516 11.6536 5.33345L11.9995 5.33345C12.8496 5.3329 13.6782 5.60318 14.3643 6.1051C15.0506 6.60712 15.559 7.31476 15.8158 8.12531C16.0726 8.93587 16.0644 9.80717 15.7925 10.6128C15.5206 11.4184 14.999 12.1164 14.3035 12.6055C14.0023 12.8172 13.5865 12.7448 13.3747 12.4436C13.1629 12.1424 13.2353 11.7266 13.5365 11.5148C14.0002 11.1887 14.3479 10.7234 14.5292 10.1863C14.7105 9.64926 14.7159 9.06839 14.5447 8.52802C14.3735 7.98766 14.0346 7.5159 13.5771 7.18122C13.1196 6.84654 12.5674 6.66634 12.0005 6.66679H11.16C10.8556 6.66679 10.5899 6.46064 10.5142 6.16581C10.3388 5.48207 10.0105 4.84704 9.55415 4.30853C9.09777 3.77001 8.52517 3.34205 7.87945 3.05685C7.23374 2.77166 6.53174 2.63666 5.82631 2.66203C5.12087 2.6874 4.43038 2.87247 3.80682 3.20331C3.18326 3.53415 2.64288 4.00214 2.22636 4.57205C1.80984 5.14195 1.52803 5.79892 1.40215 6.4935C1.27627 7.18808 1.3096 7.90216 1.49964 8.58199C1.68967 9.26182 2.03145 9.88969 2.49925 10.4183C2.74325 10.694 2.71753 11.1154 2.4418 11.3594C2.16607 11.6034 1.74474 11.5777 1.50074 11.3019C0.899287 10.6223 0.459855 9.81501 0.215528 8.94094C-0.0287992 8.06687 -0.0716543 7.14876 0.0901889 6.25573C0.252032 5.36271 0.614356 4.51803 1.14988 3.78529C1.68541 3.05256 2.38019 2.45086 3.18191 2.02549C3.98363 1.60013 4.8714 1.36218 5.77839 1.32956Z"
                              fill="#333333"/>
                    </svg>
                </div>
            </Flex>
            <Flex className='custom-modal-body' width='100%' direction='column'>
                <div className="img-block" style={{height:'660px', width:'100%'}}>
                    <img src={agreement} alt="img" style={{width:'100%' , height:'100%' , objectFit:'contain'}}/>
                </div>
                <CustomAccordeon/>
                <EditDocuments/>
                <RequestDetailsBlock/>
                <InsuranceModalBlock/>
            </Flex>
        </Flex>
    );
};

export default CustomModal;