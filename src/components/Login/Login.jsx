import { Component } from 'react';
import './Login.scss';

import { withAuth } from '../../AuthContext';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
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
        {this.props.isLoggedIn && < Redirect to='/map' />}
        <h2>Войти</h2>
        <>Новый пользователь?</>
        <Link to='/checkin'>Зарегистрируйтесь</Link>
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
    );
  }
}

export default withAuth(Login);
