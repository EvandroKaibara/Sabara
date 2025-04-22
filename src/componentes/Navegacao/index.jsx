import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import './Navegacao.css';

import { LuCircleUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
        <nav className='navegacao'>
            <img 
                src={isMobile ? "img/LogoMobile.png" : "img/Logo.png"} 
                className='navecao-img' 
                alt="Logo" 
            />

            <button className="menu-toggle" onClick={toggleMenu}>
                <GiHamburgerMenu size={30} color='var(--azul-claro)' />
            </button>

            <div className={`navecao-links ${menuAberto ? 'ativo' : ''}`}>
                <Link to="/" className='navecao-item'>Início</Link>
                <a href="https://www.hospitalinfantilsabara.org.br/" className='navecao-item'>Hospital Sabará</a>
                <Link to="/login" className='navecao-item'>
                    <LuCircleUser size={24} style={{ marginRight: '8px' }} />
                    Fazer Login
                </Link>
                <Menu />
            </div>
        </nav>
    );
};

export default Navegacao;