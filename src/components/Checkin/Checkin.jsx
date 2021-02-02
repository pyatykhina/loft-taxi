import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Checkin.scss';
import { CheckinForm } from './CheckinForm';

class Checkin extends Component {
  render() {
    return (
      <div className='form checkin-form'> 
        {this.props.isLoggedIn && < Redirect to='/map' />}
        <h2>Регистрация</h2>
        Уже зарегистрирован?  <Link to='/'>Войти</Link>
        <CheckinForm />
      </div>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),{}
)(Checkin);
