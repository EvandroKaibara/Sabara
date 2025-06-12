import './FormLogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const FormLogin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjoiUm9sZUVudW0uQURNSU4iLCJleHAiOjE3NTAyOTY3NzZ9.XRqsgz8JMgedtYgBN-OnzujKWcvGUJpSjEg2I9QOeN4'
        },
        body: JSON.stringify({
          email: login,
          password: senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        toast.success('Login realizado com sucesso!');
        navigate('/');
      } else {
        toast.error(data.message || 'Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      toast.error('Erro ao conectar com o servidor.');
    }
  };

  return (
    <>
      <div className='container-form-login'>
        <form className='form-login' onSubmit={handleLogin}>
          <h2 className='h2-login'>Bem-vindo(a) ao portal médico. Por favor, insira suas credenciais para acessar o sistema.</h2>

          <div className='container-login'>
            <label className='label-login'>Login</label>
            <input
              type="text"
              required
              className='input-login'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className='container-login'>
            <label className='label-login'>Senha</label>
            <input
              type="password"
              required
              className='input-login'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <p className='p-login'>
            <Toaster richColors />
            Esqueceu a senha?{' '}
            <span
              onClick={() => toast.success('Suporte técnico acionado')}
              className='span-login'
            >
              Acione o suporte!
            </span>
          </p>

          <button type="submit" className='button-login'>Entrar</button>
        </form>

        <img src='/img/ImagemLogin.png' className='img-form-login' />
      </div>
    </>
  );
};

export default FormLogin;
