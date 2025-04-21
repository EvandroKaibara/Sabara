import FormLogin from '../../componentes/FormLogin';
import HeaderLogin from '../../componentes/HeaderLogin';
import './Login.css'


const Login = () => {
    return(
        <main>
            <div className='login-container'>
                <HeaderLogin />
                <FormLogin />
                <img src="/img/Onda.png" className='login-onda'/>
            </div>
        </main>
  );
}

export default Login;