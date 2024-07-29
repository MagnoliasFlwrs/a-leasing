import React from 'react';
import MobileMenu from "./MobileMenu.jsx";

const Header = () => {
    return (
        <>
            <header className='header'>
                <ul>
                    <li>
                        <a href='/' className='logo-title'>а</a>
                    </li>
                    <li>
                        <a href="/profile">Профиль</a>
                    </li>
                    <li>
                        <a href="/contracts">Договоры лизинга</a>
                    </li>
                    <li>
                        <a href="/applications">Мои заявки</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/contracts">Курсы валют</a>
                    </li>
                    <li>
                        <a href="/contracts">Страховой случай</a>
                    </li>
                    <li>
                        <a href="/contracts">Контакты</a>
                    </li>
                    <li>
                        <a href="/contracts">FaQ</a>
                    </li>
                    <li>
                        <a href="/contracts">О компании</a>
                    </li>
                    <li>
                        <p className='logo-subtitle'>А-Лизинг</p>
                    </li>
                </ul>
            </header>
            <div className="mobile-menu">
                <MobileMenu/>
            </div>
        </>

    )
        ;
};

export default Header;