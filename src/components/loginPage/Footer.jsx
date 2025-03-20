import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <p> УНП: 192629759 Минск, Адрес: 220030, г.Минск, ул. Мясникова, д.70, оф.18. Телефон: <a href="tel:+375447017070">+375 (44) 701-70-70</a> <br/>
                <a className='blue-link' href="#">Свидетельство</a> о включении в реестр лизинговых организаций от 19.04.2016 г.</p>
            <div className="line"></div>
            <div className="row">
                <span className="copy">© 2025 ООО «А-Лизинг».</span>
                <div className="links">
                    <a href="#">Политики безопасности</a>
                    <div className="divider"></div>
                    <a href="#">Контакты</a>
                    <div className="divider"></div>
                    <a href="#">Сall-центр</a>
                    <div className="divider"></div>
                    <a href="#">Заказать звонок</a>
                    <div className="divider"></div>
                    <a href="#">FaQ</a>
                </div>
                <a href="#" className='site'>Официальный сайт <span>А-Лизинг</span></a>
            </div>

        </div>
    );
};

export default Footer;