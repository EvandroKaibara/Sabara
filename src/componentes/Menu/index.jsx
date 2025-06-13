import "./Menu.css";

import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isLogado, setIsLogado] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogado(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogado(!!token);
  }, []);

  return (
    <div className="menu-container">
      <button className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <IoIosArrowDown color="var(--azul-claro)" size={30} />
      </button>

      <nav className={`menu ${open ? "show" : ""}`}>
        {isLogado ? (
          <ul>
            <li>
              <img src="./img/Internacao.png" alt="Secretaria" className="menu-icon" />
              <NavLink to="/login">Secretaria</NavLink>
            </li>
            <li>
              <img src="./img/Agendamento.png" alt="Consultas" className="menu-icon" />
              <NavLink to="/consulta">Consultas</NavLink>
            </li>
            <li>
              <img src="./img/ChatPaciente.png" alt="Pronto Socorro" className="menu-icon" />
              <NavLink to="/internacao">Pronto Socorro</NavLink>
            </li>
            <li className="menu-logout">
              <img src="./img/logout.png" alt="Logout" className="menu-icon" />
              <button onClick={handleLogout} className="btn--logout">Finalizar Sessão</button>
            </li>
          </ul>
        ) : (
          <div className="menu-nao-logado">
            <p className="menu-aviso">Você precisa estar logado para acessar o menu.</p>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Menu;
