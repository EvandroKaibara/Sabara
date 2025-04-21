import './FormLogin.css'

const FormLogin = () => {
  return (
    <>
      <div className='container-form-login'>
        <form className='form-login'>
          <h1 className='h1-login'>Bem-vindo(a) ao portal médico. Por favor, insira suas credenciais para acessar o sistema.</h1>
          <div className='label-login'>
            <label>Login</label>
            <input type="text"/>
          </div>        
          <div className='label-login'>
            <label>Senha</label>
            <input type="password"/>
          </div>
          <button>Entrar</button>
        </form>        
        <img src='/img/ImagemLogin.png' className='img-form-login'/>
      </div>
    </>
  )
}

export default FormLogin