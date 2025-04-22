import FormLogin from '../../componentes/FormLogin';
import HeaderLogin from '../../componentes/HeaderLogin';
import './Login.css'


const Login = () => {
    return(
        <main className='main-login'>
            <div className='login-container'>
                <HeaderLogin />
                <FormLogin />
            </div>
        </main>
  );
}

export default Login;