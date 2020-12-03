import { Component } from 'react';
import './Checkin.scss';

import { withAuth } from '../../AuthContext';
import { Link, Redirect } from 'react-router-dom';

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';

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
      <div className='form'> 
        <h2>Регистрация</h2>
        Уже зарегистрирован?  <Link to='/'>Войти</Link>
        <form onSubmit={this.authenticate} className='checkin'>
          <FormLabel className='checkin__label'>
            Адрес электронной почты*
            <Input 
              className='checkin__input'
              type='text'
              name='email'
              value={email} 
              onChange={e => this.setState({ email: e.target.value })} 
            />
          </FormLabel>
          <div className='inlineInputs'>
            <FormLabel className='checkin__label' style={{ width:'48%' }}>
              Имя*
              <Input 
                className='checkin__input'
                type='text'
                name='firstName'
                value={firstName} 
                onChange={e => this.setState({ firstName: e.target.value })} 
              />
            </FormLabel>
            <FormLabel className='checkin__label' style={{ width:'48%' }}>
              Фамилия*
              <Input 
                className='checkin__input'
                type='text'
                name='lastName'
                value={lastName} 
                onChange={e => this.setState({ lastName: e.target.value })} 
              /> 
            </FormLabel>
          </div>
          <FormLabel className='checkin__label'>
            Пароль*
            <Input 
              className='checkin__input'
              type='password'
              name='password'
              value={password} 
              onChange={e => this.setState({ password: e.target.value })} 
            />
          </FormLabel>
          <button type="submit" className='checkin__button'>Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

export default withAuth(Checkin);
