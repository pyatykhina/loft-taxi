import { Component } from 'react';
import PropTypes from "prop-types";
import './Login.scss';

import { withAuth } from '../../AuthContext';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  static propTypes = {
    navigate: PropTypes.func
  }

  authenticate = e => {
    e.preventDefault();
    const {email, password} = e.target ;
    this.props.logIn(email.value, password.value); 
  };
 
  render() {
    const { email, password } = this.state;
    return (
      <> 
        {this.props.isLoggedIn ? (<button onClick={() => {this.props.navigate('map')}}>Перейти к карте</button>) : (
          <>
            <h2>Войти</h2>
            <>Новый пользователь?</>
            <button onClick={() => {
                this.props.navigate('checkin')}
              }>
                Зарегистрируйтесь
              </button>
            <form onSubmit={this.authenticate}>
              <label>
                Имя пользователя
                <input 
                  type='text'
                  name='email'
                  value={email} 
                  onChange={e => this.setState({ email: e.target.value })} 
                />
              </label>
              <label>
                Пароль
                <input 
                  type='password'
                  name='password'
                  value={password} 
                  onChange={e => this.setState({ password: e.target.value })} 
                />
              </label>
              <input type="submit" value="Войти" />
            </form>
          </>
        )}
      </>
    );
  }
}

export default withAuth(Login);
