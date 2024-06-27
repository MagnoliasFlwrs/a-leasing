import React from 'react';
import '../styles/profile.css'
import ProfileUserInfoBlock from "../components/profile/ProfileUserInfoBlock.jsx";
import ProfileDetailsBlock from "../components/profile/ProfileDetailsBlock.jsx";
import ProfileNotification from "../components/profile/ProfileNotification.jsx";

const ProfileLayout = () => {
    return (
        <div className='profile-container'>
            <ProfileUserInfoBlock/>
            <ProfileDetailsBlock/>
            <ProfileNotification/>
        </div>
    );
};

export default ProfileLayout;