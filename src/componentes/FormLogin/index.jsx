import './FormLogin.css'

import { Toaster, toast } from 'sonner';

const FormLogin = () => {
  return (
    <>
      <div className='container-form-login'>
        <form className='form-login'>
          <h2 className='h2-login'>Bem-vindo(a) ao portal médico. Por favor, insira suas credenciais para acessar o sistema.</h2>
          <div className='container-login'>
            <label className='label-login'>Login</label>
            <input type="text" required className='input-login'/>
          </div>        
          <div className='container-login'>
            <label className='label-login'>Senha</label>
            <input type="password" required className='input-login'/>
          </div>
          <p className='p-login'>
            <Toaster richColors/>
            Esqueceu a senha? <span onClick={() => toast.success('Suporte técnico acionado')} className='span-login'>Acione o suporte!</span>
          </p>
          <button className='button-login'>Entrar</button>
        </form>        
        <img src='/img/ImagemLogin.png' className='img-form-login'/>
      </div>
    </>
  )
}

export default FormLogin