import "./Menu.css";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom"; 

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="menu-container">
      <button className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <IoIosArrowDown color="#2E86C1" size={30} />
      </button>

      <nav className={`menu ${open ? "show" : ""}`}>
        <ul>
          <li>
            <img src="./img/Internacao.png" alt="Secretaria" className="menu-icon" />
            <Link to="/login">Secretaria</Link>
          </li>
          <li>
            <img src="./img/Agendamento.png" alt="Consultas" className="menu-icon" />
            <Link to="/login">Consultas</Link>
          </li>
          <li>
            <img src="./img/ChatPaciente.png" alt="Pronto Socorro" className="menu-icon" />
            <Link to="/login">Pronto Socorro</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;