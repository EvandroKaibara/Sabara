import './HeaderLogin.css'

import { NavLink } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <div className='header-login'>
        <NavLink to="/">
          <img src="/img/Logo.png" className='img-header-login desktop-logo' alt="Logo" />
          <img src="/img/LogoMobile.png" className='img-header-login mobile-logo' alt="Logo Mobile"/>
        </NavLink>
        <div className='container-link-login'>
            <NavLink to="/" className='link-login desktop-link'>Início</NavLink>
            <a href="https://www.hospitalinfantilsabara.org.br/" className='link-login desktop-link'>Hospital Sabará</a>
        </div>
    </div>
  )
}

export default HeaderLogin;
