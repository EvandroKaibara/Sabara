import "./Menu.css";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom"; 

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="menu-container">
      <button className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <IoIosArrowDown color="var(--azul-claro)" size={30} />
      </button>

      <nav className={`menu ${open ? "show" : ""}`}>
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
        </ul>
      </nav>
    </div>
  );
};

export default Menu;