import { Component } from 'react';
import './Header.scss';

import Logo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <div className='header__logo'>
          <img src={Logo} alt='logo' />
        </div>
          <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-list-item'>
              <button onClick={() => {
                this.props.navigate('map')}
              }>
                Карта
              </button>
            </li>
            <li className='header__nav-list-item'>
              <button onClick={() => {
                this.props.navigate('profile')}
              }>
                Профиль
              </button>
            </li>
            <li className='header__nav-list-item'>
              <button onClick={() => {
                this.props.navigate('login')}
              }>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}

export default Header;
