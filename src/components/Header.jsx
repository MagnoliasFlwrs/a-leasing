import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <ul>
                <li>
                    <p className='logo-title'>а</p>
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
    )
        ;
};

export default Header;