import './Botoes.css';

import { NavLink } from "react-router-dom"; 

const Botoes = ({ texto, imagem, rota }) => {
  return (
    <>
      <NavLink to={rota}>
        <div className="botao">
          <img src={imagem} alt="Ícone do botão" />
          <span>{texto}</span>
        </div>
      </NavLink>
    </>
  );
}

export default Botoes;
