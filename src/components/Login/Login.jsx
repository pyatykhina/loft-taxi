import { Component } from 'react';
import './Login.scss';

import { withAuth } from '../../AuthContext';
import { Link, Redirect } from 'react-router-dom';

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';

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
      <div className='form'> 
        {this.props.isLoggedIn && < Redirect to='/map' />}
        <h2>Войти</h2>
        Новый пользователь?  <Link to='/checkin'>Зарегистрируйтесь</Link>
        <form onSubmit={this.authenticate} className='login'>
          <FormLabel className='login__label'>
            Имя пользователя*
            <Input 
              className='login__input'
              type='text'
              name='email'
              value={email} 
              onChange={e => this.setState({ email: e.target.value })} 
            />
          </FormLabel>
          <FormLabel className='login__label'>
            Пароль*
            <Input 
              className='login__input'
              type='password'
              name='password'
              value={password} 
              onChange={e => this.setState({ password: e.target.value })} 
            />
          </FormLabel>
          <button type='submit' className='login__button'>Войти</button>
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
