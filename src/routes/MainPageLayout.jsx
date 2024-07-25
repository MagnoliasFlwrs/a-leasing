import React from 'react';
import '../styles/mainPage.css'
import MainPageAboutBlock from "../components/mainPage/MainPageAboutBlock.jsx";
import NewsBlock from "../components/mainPage/NewsBlock.jsx";
import PromotionsBlock from "../components/mainPage/PromotionsBlock.jsx";
import HistoryCompanyBlock from "../components/mainPage/HistoryCompanyBlock.jsx";
import CatalogBlock from "../components/mainPage/CatalogBlock.jsx";
import Footer from "../components/loginPage/Footer.jsx";
import ContactForm from "../components/mainPage/ContactForm.jsx";
import ReviewsBlock from "../components/mainPage/ReviewsBlock.jsx";

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
                <HistoryCompanyBlock/>
                <CatalogBlock/>
                <div className="info-block">
                    <h2>Информация об осуществляемой лизинговой деятельности и финансовом состоянии ООО «А-Лизинг»</h2>
                    <a href="#">Читать подробнее</a>
                </div>
                <ReviewsBlock/>
                <ContactForm/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainPageLayout;