import './Home.css';

import Banner from "../../componentes/Banner";
import Botoes from "../../componentes/Botoes";
import Navegacao from "../../componentes/Navegacao";
import Rodape from '../../componentes/Rodape';
import Carrossel from '../../componentes/Carrossel';

const Login = () => {
    return(
        <>
        <Navegacao />
        <Banner />
        <div className='container-botoes'>
            <Botoes texto='Secretária' imagem='/img/Prancheta.png' rota='/login'/>
            <Botoes texto='Consultas' imagem='/img/Agenda.png' rota='/consulta'/>
            <Botoes texto='Pronto Socorro' imagem='/img/Chat.png' rota='/internacao'/>
        </div>
        <Carrossel />
        <Rodape />
        </>
  );
}

export default Login;