import React from 'react';
import Footer from "../components/loginPage/Footer.jsx";
import '../styles/loginLayout.css'
import LoginSlider from "../components/loginPage/LoginSlider.jsx";
import LoginForm from "../components/loginPage/LoginForm.jsx";

const LoginLayout = () => {
    return (
        <div className='login-layout'>
            <div className="form-row">
                <LoginSlider/>
                <LoginForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginLayout;