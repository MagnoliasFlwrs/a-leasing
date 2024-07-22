import React from 'react';
import '../styles/mainPage.css'
import MainPageAboutBlock from "../components/mainPage/MainPageAboutBlock.jsx";

const MainPageLayout = () => {
    return (
        <div className='main-page-container'>
            <div className="wrapper">
                <div className="head-block">
                    <h1>А-Лизинг</h1>
                    <a href="#" className="btn">Оформить лизинг онлайн</a>
                </div>
                <MainPageAboutBlock/>
            </div>
        </div>
    );
};

export default MainPageLayout;