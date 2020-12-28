import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.scss';
import { LoginForm } from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className='form login-form'> 
        {this.props.isLoggedIn && < Redirect to='/map' />}
        <h2>Войти</h2>
        Новый пользователь?  <Link to='/checkin'>Зарегистрируйтесь</Link>
        {this.props.error && <p className='form-error' style={{marginTop: '15px', marginBottom: '-20px'}}>{this.props.error}</p>}   
        <LoginForm />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error
  }),{}
)(Login);
