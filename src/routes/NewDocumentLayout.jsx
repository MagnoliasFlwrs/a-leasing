import React from 'react';
import '../styles/newDocumentLayout.css'
import ProcuratoryForm from "../components/contracts/requests/ProcuratoryForm.jsx";
import OtherRequestForm from "../components/contracts/requests/OtherRequestForm.jsx";
import DocumentCopyModalBlock from "../components/contracts/requests/DocumentCopyModalBlock.jsx";

const NewDocumentLayout = () => {
    return (
        <div className='new-document-layout'>
            <div className="back-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2.6665 8.49967C2.6665 8.13148 2.96498 7.83301 3.33317 7.83301H12.6665C13.0347 7.83301 13.3332 8.13148 13.3332 8.49967C13.3332 8.86786 13.0347 9.16634 12.6665 9.16634H3.33317C2.96498 9.16634 2.6665 8.86786 2.6665 8.49967Z"
                          fill="#0070C9"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.47124 3.36225C8.73159 3.6226 8.73159 4.04471 8.47124 4.30506L4.27598 8.50033L8.47124 12.6956C8.73159 12.9559 8.73159 13.378 8.47124 13.6384C8.21089 13.8987 7.78878 13.8987 7.52843 13.6384L2.86177 8.97173C2.60142 8.71138 2.60142 8.28927 2.86177 8.02892L7.52843 3.36225C7.78878 3.1019 8.21089 3.1019 8.47124 3.36225Z"
                          fill="#0070C9"/>
                </svg>
                <span>Назад</span>
            </div>
            <ProcuratoryForm/>
            <OtherRequestForm/>
            <DocumentCopyModalBlock/>
        </div>
    );
};

export default NewDocumentLayout;