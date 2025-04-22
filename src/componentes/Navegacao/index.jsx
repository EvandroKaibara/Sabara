import Menu from '../Menu';
import './Navegacao.css';

import { LuCircleUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navegacao = () => {
    return(
        <nav className='navegacao'>
            <img src="img/Logo.png" className='navecao-img'/>

            <div className='navecao-links'>
                <Link to="/" className='navecao-item'>Início</Link>
                <a href="https://www.hospitalinfantilsabara.org.br/" className='navecao-item'>Hospital Sabará</a>
                <LuCircleUser  size={40} color='var(--azul-claro)'/>
                <Link to="/login" className='navecao-item'>Fazer Login</Link>
                <Menu />
            </div>
        </nav>
        
    );
}

export default Navegacao;