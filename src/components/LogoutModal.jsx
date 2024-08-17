import React from 'react';
import {useSignOutMutation} from "../services/auth/index.js";
import {useDispatch} from "react-redux";
import {logout} from "../lib/store/features/auth/index.js";

const LogoutModal = ({openLogoutModal}) => {
    const [signOut] = useSignOutMutation();
    const dispatch = useDispatch();
    const handleSignOut = async () => {
        const refresh = localStorage.getItem('refresh-token');
        if (!refresh) {
            console.error('Refresh token is missing');
            return;
        }
        try {
            const response = await signOut({ "refreshToken": refresh }).unwrap();
            dispatch(logout());
        } catch (error) {
            console.error('Sign-out failed:', error);
        }
    };
    return (
        <div className='logout-modal'>
            <div className="modal-body">
                <p>Вы собираетесь <br/>
                    выйти из аккаунта</p>
                <div className="btns">
                    <button onClick={handleSignOut} className="red-btn">Выход</button>
                    <span onClick={() => openLogoutModal(false)}>Отмена</span>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;