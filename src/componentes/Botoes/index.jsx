import './Botoes.css';

import { Link } from "react-router-dom"; 

const Botoes = ({ texto, imagem }) => {
  return (
    <>
      <Link to='/login'>
        <div className="botao">
          <img src={imagem} alt="Ícone do botão" />
          <span>{texto}</span>
        </div>
      </Link>
    </>
  );
}

export default Botoes;
