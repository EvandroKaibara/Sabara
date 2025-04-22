import './HeaderLogin.css'

import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <div className='header-login'>
        <Link to="/">
          <img src="/img/Logo.png" className='img-header-login desktop-logo' alt="Logo" />
          <img src="/img/LogoMobile.png" className='img-header-login mobile-logo' alt="Logo Mobile"/>
        </Link>
        <div className='container-link-login'>
            <Link to="/" className='link-login desktop-link'>Início</Link>
            <a href="https://www.hospitalinfantilsabara.org.br/" className='link-login desktop-link'>Hospital Sabará</a>
        </div>
    </div>
  )
}

export default HeaderLogin;
