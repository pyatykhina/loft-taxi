import { Component } from 'react';
import PropTypes from "prop-types";
import './Header.scss';
import { Logo } from 'loft-taxi-mui-theme';
import { withAuth } from '../../AuthContext';

class Header extends Component {
  static propTypes = {
    navigate: PropTypes.func
  }

  unauthenticate = () => {
    this.props.logOut();
    this.props.navigate('login');
  }

  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <Logo/>
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
                <button onClick={this.unauthenticate}>
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

export default withAuth(Header);
