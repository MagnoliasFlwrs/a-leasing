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
        <nav>
            <div className="mobile_nav">
                <p className='logo-title'>а</p>
                <MenuButton type="button" onClick={toggleMenu} open={open}>
                    <span />
                    <span />
                </MenuButton>
            </div>

            <ul className={open ? "show" : ""}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}


export default MobileMenu;