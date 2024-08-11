import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    position: relative;
    z-index: 3;
    
    span {
        background: #000;
        height: 1.5px;
        width: 100%;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
    span:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg) translate(-3px, 0)' : 'rotate(0)')};
    }
    span:nth-child(2) {
        transform: ${({ open }) => (open ? 'rotate(-45deg) translate(-3px, 0)' : 'rotate(0)')};
    }
`;


const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return(
        <nav className='burger-menu'>
            <div className="mobile_nav">
                <p className='logo-title'></p>
                <MenuButton type="button" onClick={toggleMenu} open={open}>
                    <span />
                    <span />
                </MenuButton>
            </div>

            <div className={open ? "burger-content show" : "burger-content"}>
                <div className="block">
                    <a href="/profile" className='link'>Профиль</a>
                    <a href="/contracts" className='link'>Договоры лизинга</a>
                    <a href="/applications" className='link'>Мои заявки</a>
                </div>
                <div className="block">
                    <a href="#" className='link'>Курсы валют</a>
                    <a href="#" className='link'>Страховой случай</a>
                    <a href="#" className='link'>Контакты</a>
                    <a href="#" className='link'>FaQ</a>
                    <a href="#" className='link'>О компании</a>
                    <a href="#" className='link'>Сайт А-Лизинг</a>
                    <a href="#" className="red-btn">Заявка на лизинг</a>
                </div>
            </div>
        </nav>
    )
}


export default MobileMenu;