import './NotFound.css'

import Navegacao from "../../componentes/Navegacao";
import Rodape from '../../componentes/Rodape';

import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';


const ErrorPage = () => {
  return (
    <>
    <Navegacao />
    <main className='main-notfound'>
      <img src='/img/NotFound.png' className='img-notfound'/>
      <div className='container-notfound'>
        <h2 className='h2-notfound'>
          Desculpe, não conseguimos encontrar o que você procura.
        </h2>
        <p className='p-notfound'>
          Verifique se o endereço digitado está correto ou volte à página inicial.
        </p>
        <p className='p-notfound'>
          <Toaster richColors/>
          Se o problema persistir, entre em contato com <span onClick={() => toast.success('Suporte técnico acionado')} className='span-notfound'>nosso suporte</span>.
        </p>
        <Link to='/' className='link-notfound'>Voltar à página inicial</Link>
      </div>
    </main>
    <Rodape />
    </>
  )
}

export default ErrorPage