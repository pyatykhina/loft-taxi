import { Component } from 'react';
import './Login.scss';

class Login extends Component {
  state = {
    login: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.navigate('map');
  };

  render() {
    const { login, password } = this.state;
    return (
      <>
        <h2>Войти</h2>
        <>Новый пользователь?</>
        <button onClick={() => {
          this.props.navigate('checkin')}
        }>
          Зарегистрируйтесь
        </button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя пользователя
            <input 
              type='text'
              name='login'
              value={login} 
              onChange={e => this.setState({ login: e.target.value })} 
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

export default Login;
