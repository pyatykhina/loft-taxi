import { Component } from 'react';
import './Checkin.scss';

import { withAuth } from '../../AuthContext';
import { Link, Redirect } from 'react-router-dom';

class Checkin extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  authenticate = e => {
    e.preventDefault();
    const {email, password} = e.target ;
    this.props.logIn(email.value, password.value); 
    <Redirect to='/map' />
  };

  render() {
    const { email, firstName, lastName, password } = this.state;
    return (
      <>
        <h2>Регистрация</h2>
        <>Уже зарегистрирован?</>
        <Link to='/'>Войти</Link>
        <form onSubmit={this.authenticate}>
          <label>
            Адрес электронной почты
            <input 
              type='text'
              name='email'
              value={email} 
              onChange={e => this.setState({ email: e.target.value })} 
            />
          </label>
          <label>
            Имя
            <input 
              type='text'
              name='firstName'
              value={firstName} 
              onChange={e => this.setState({ firstName: e.target.value })} 
            />
          </label>
          <label>
            Фамилия
            <input 
              type='text'
              name='lastName'
              value={lastName} 
              onChange={e => this.setState({ lastName: e.target.value })} 
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
          <input type="submit" value="Зарегистрироваться" />
        </form>
      </>
    );
  }
}

export default withAuth(Checkin);
