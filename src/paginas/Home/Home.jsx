import './Home.css';

import Banner from "../../componentes/Banner";
import Botoes from "../../componentes/Botoes";
import Navegacao from "../../componentes/Navegacao";
import Rodape from '../../componentes/Rodape';
import Carrossel from '../../componentes/Carrossel';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

const Home = () => {
  const navigate = useNavigate();

  const handleProtectedNavigation = (rota) => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(rota);
    } else {
      toast.error('Você precisa estar logado para acessar esta área.');
    }
  };

  return (
    <>
      <Toaster richColors />
      <Navegacao />
      <Banner />

      <div className='container-botoes'>
        <Botoes
          texto='Secretária'
          imagem='/img/Prancheta.png'
          onClick={() => handleProtectedNavigation('/login')}
        />
        <Botoes
          texto='Consultas'
          imagem='/img/Agenda.png'
          onClick={() => handleProtectedNavigation('/consulta')}
        />
        <Botoes
          texto='Pronto Socorro'
          imagem='/img/Chat.png'
          onClick={() => handleProtectedNavigation('/internacao')}
        />
      </div>

      <Carrossel />
      <Rodape />
    </>
  );
};

export default Home;
