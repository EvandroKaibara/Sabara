import Menu from '../Menu';
import './Navegacao.css';

import { LuCircleUser } from "react-icons/lu";

const Navegacao = () => {
    return(
        <div className='navegacao'>
            <img src="img/Logo.png" className='navecao-img'/>

            <div className='navecao-links'>
                <a href="#" className='navecao-item'>Início</a>
                <a href="#" className='navecao-item'>Hospital Sabará</a>
                <LuCircleUser  size={40} color='#2E86C1'/>
                <a href="#" className='navecao-item'>Fazer login</a>
                <Menu />
            </div>
        </div>
        
    );
}

export default Navegacao;