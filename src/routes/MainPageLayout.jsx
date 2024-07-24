import React from 'react';
import '../styles/mainPage.css'
import MainPageAboutBlock from "../components/mainPage/MainPageAboutBlock.jsx";
import NewsBlock from "../components/mainPage/NewsBlock.jsx";
import PromotionsBlock from "../components/mainPage/PromotionsBlock.jsx";

const MainPageLayout = () => {
    return (
        <div className='main-page-container'>
            <div className="wrapper">
                <div className="head-block">
                    <h1>А-Лизинг</h1>
                    <a href="#" className="btn">Оформить лизинг онлайн</a>
                </div>
                <MainPageAboutBlock/>
                <NewsBlock/>
                <PromotionsBlock/>
            </div>
        </div>
    );
};

export default MainPageLayout;