import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <ul>
                <li>
                    <p className='logo-title'>а</p>
                </li>
                <li>
                    <a href="#">Профиль</a>
                </li>
                <li>
                    <a href="#">Договоры лизинга</a>
                </li>
                <li>
                    <a href="#">Мои заявки</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Курсы валют</a>
                </li>
                <li>
                <a href="#">Страховой случай</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
                <li>
                    <a href="#">FaQ</a>
                </li>
                <li>
                    <a href="#">О компании</a>
                </li>
                <li>
                    <p className='logo-subtitle'>А-Лизинг</p>
                </li>
            </ul>
        </header>
    )
        ;
};

export default Header;