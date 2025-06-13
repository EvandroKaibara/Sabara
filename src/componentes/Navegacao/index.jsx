import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import './Navegacao.css';

import { LuCircleUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

const Navegacao = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const navigate = useNavigate();

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

    useEffect(() => {
        const fetchNomeUsuario = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const responseId = await fetch('http://127.0.0.1:8000/users/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!responseId.ok) {
                    throw new Error('Não autorizado');
                }

                const dataId = await responseId.json();
                const userId = dataId.id;

                const responseUser = await fetch(`http://127.0.0.1:8000/users/?id=${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!responseUser.ok) {
                    throw new Error('Erro ao buscar dados do usuário');
                }

                const dataUser = await responseUser.json();
                if (dataUser.length > 0) {
                    setNomeUsuario(dataUser[0].name); 
                }
            } catch (error) {
                console.error('Erro ao buscar nome do usuário:', error.message);
            }
        };

        fetchNomeUsuario();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setNomeUsuario(null);
        navigate('/login');
    };

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
                
                {nomeUsuario ? (
                    <div className='navecao-item' onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <LuCircleUser size={24} style={{ marginRight: '8px' }} />
                        {nomeUsuario} (Sair)
                    </div>
                ) : (
                    <NavLink to="/login" className='navecao-item'>
                        <LuCircleUser size={24} style={{ marginRight: '8px' }} />
                        Fazer Login
                    </NavLink>
                )}

                <Menu />
            </div>
        </header>
    );
};

export default Navegacao;
