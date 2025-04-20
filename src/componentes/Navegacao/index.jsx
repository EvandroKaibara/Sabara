import Menu from '../Menu';
import './Navegacao.css';

import { LuCircleUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navegacao = () => {
    return(
        <nav className='navegacao'>
            <img src="img/Logo.png" className='navecao-img'/>

            <div className='navecao-links'>
                <a href="#" className='navecao-item'>Início</a>
                <a href="#" className='navecao-item'>Hospital Sabará</a>
                <LuCircleUser  size={40} color='#2E86C1'/>
                <Link to="/Login" className='navecao-item'>Fazer Login</Link>
                <Menu />
            </div>
        </nav>
        
    );
}

export default Navegacao;