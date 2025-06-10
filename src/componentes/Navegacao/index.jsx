import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import './Navegacao.css';

import { LuCircleUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navegacao = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='navegacao'>
            <NavLink to="/">
                <img 
                    src={isMobile ? "img/LogoMobile.png" : "img/Logo.png"} 
                    className='navecao-img' 
                    alt="Logo" 
                />
            </NavLink>

            <button className="menu-toggle" onClick={toggleMenu}>
                <GiHamburgerMenu size={30} color='var(--azul-claro)' />
            </button>

            <div className={`navecao-links ${menuAberto ? 'ativo' : ''}`}>
                <NavLink to="/" className='navecao-item'>Início</NavLink>
                <a href="https://www.hospitalinfantilsabara.org.br/" target="_blank" className='navecao-item'>Hospital Sabará</a>
                <NavLink to="/login" className='navecao-item'>
                    <LuCircleUser size={24} style={{ marginRight: '8px' }} />
                    Fazer Login
                </NavLink>
                <Menu />
            </div>
        </header>
    );
};

export default Navegacao;