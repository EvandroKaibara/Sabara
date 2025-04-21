import './HeaderLogin.css'

import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <div className='header-login'>
        <img src="/img/Logo.png" className='img-header-login'/>
        <div className='container-link-login'>
            <Link to="/" className='link-login'>Início</Link>
            <a href="https://www.hospitalinfantilsabara.org.br/" className='link-login'>Hospital Sabará</a>
        </div>
    </div>
  )
}

export default HeaderLogin