import React, {useEffect, useState} from 'react';
import '../styles/editingProfile.css'
import {
    useGetIndividualEntrepreneursProfileByIdQuery,
    useGetLegalPersonsProfileByIdQuery, useGetNaturalPersonsProfileByIdQuery
} from "../services/auth/index.js";
import ULTabs from "../components/contracts/editingProfile/ULTabs.jsx";

const EditingProfileLayout = () => {
    const [userInfo, setUserInfo] = useState(null);
    const accessToken = localStorage.getItem('access-token');
    const parts = accessToken.split('.');
    const [profileData , setProfileData] = useState(null)


    const base64urlDecode = (str) => {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        return atob(base64);
    };

    useEffect(() => {
        if (parts.length === 3 && parts[1]) {
            let decodedToken = base64urlDecode(parts[1]);
            let userInfo = JSON.parse(decodedToken);
            setUserInfo(userInfo);
        } else {
            console.error('Некорректный формат access token');
        }
    }, []);


    const {
        data: individualData,
        error: individualError,
        isSuccess: isIndividualSuccess
    } = useGetIndividualEntrepreneursProfileByIdQuery(
        userInfo?.signInType === 'INDIVIDUAL_ENTREPRENEUR' ? userInfo.accountId : null,
        { skip: userInfo?.signInType !== 'INDIVIDUAL_ENTREPRENEUR' }
    );

    const {
        data: legalData,
        error: legalError,
        isSuccess: isLegalSuccess
    } = useGetLegalPersonsProfileByIdQuery(
        userInfo?.signInType === 'LEGAL_PERSON' ? userInfo.accountId : null,
        { skip: userInfo?.signInType !== 'LEGAL_PERSON' }
    );

    const {
        data: naturalData,
        error: naturalError,
        isSuccess: isNaturalSuccess
    } = useGetNaturalPersonsProfileByIdQuery(
        userInfo?.signInType === 'NATURAL_PERSON' ? userInfo.accountId : null,
        { skip: userInfo?.signInType !== 'NATURAL_PERSON' }
    );

    useEffect(() => {
        if (isIndividualSuccess) {
            setProfileData(individualData)
        } else if (isLegalSuccess) {
            setProfileData(legalData)
        } else if (isNaturalSuccess) {
            setProfileData(naturalData)
        }
    }, [individualData, naturalData,legalData]);

    console.log(profileData)


    return (
        <div className='editing-profile-layout'>
            <div className="head-row">
                <div className="col">
                    <a href="/profile" className="back-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.66675 8.49967C2.66675 8.13148 2.96522 7.83301 3.33341 7.83301H12.6667C13.0349 7.83301 13.3334 8.13148 13.3334 8.49967C13.3334 8.86786 13.0349 9.16634 12.6667 9.16634H3.33341C2.96522 9.16634 2.66675 8.86786 2.66675 8.49967Z"
                                  fill="#0070C9"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8.47149 3.36225C8.73184 3.6226 8.73184 4.04471 8.47149 4.30506L4.27622 8.50033L8.47149 12.6956C8.73184 12.9559 8.73184 13.378 8.47149 13.6384C8.21114 13.8987 7.78903 13.8987 7.52868 13.6384L2.86201 8.97173C2.60166 8.71138 2.60166 8.28927 2.86201 8.02892L7.52868 3.36225C7.78903 3.1019 8.21114 3.1019 8.47149 3.36225Z"
                                  fill="#0070C9"/>
                        </svg>
                        <span>Назад</span>
                    </a>
                    <h1>Редактирование анкеты</h1>
                </div>
                <div className="red-btn">
                    Сохранить изменения
                </div>
            </div>
            {
                userInfo?.signInType === 'LEGAL_PERSON' && <ULTabs profile={profileData?.contactPersons}/>
            }

        </div>
    );
};

export default EditingProfileLayout;