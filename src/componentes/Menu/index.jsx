import "./Menu.css";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="menu-container">
      <button className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
        <IoIosArrowDown color="#2E86C1" size={30}/>
      </button>

      <nav className={`menu ${open ? "show" : ""}`}>
        <ul>
            <li>
                <img src="./img/Internacao.png" alt="Internações" className="menu-icon" />
                <a href="#">Internações</a>
            </li>
            <li>
                <img src="./img/Agendamento.png" alt="Agendamento" className="menu-icon" />
                <a href="#">Agendamento</a>
            </li>
            <li>
                <img src="./img/ChatPaciente.png" alt="Internações" className="menu-icon" />
                <a href="#">Chat com o paciente</a>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;