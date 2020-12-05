import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions';
import './App.scss';
import Logo from '../../images/logo.svg';

import Login from '../Login';
import Checkin from '../Checkin';
import Map from '../Map';
import Profile from '../Profile';

const PrivateRoute = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { logIn, logOut }
)(({
  component: RouteComponent, 
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={routeProps =>
      isLoggedIn ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to='/' />
      )
    }
  />
));

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <main>
          <img src={Logo} alt='Logo' className='logo' />
          <section>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/checkin' component={Checkin} />
              <PrivateRoute path='/map' component={Map} />
              <PrivateRoute path='/profile' component={Profile} />
              <Redirect from='*' to='/' />
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
