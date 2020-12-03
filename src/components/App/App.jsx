import { Component } from 'react';
import { withAuth, PrivateRoute } from '../../AuthContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Header from '../Header';
import Login from '../Login';
import Checkin from '../Checkin';
import Map from '../Map';
import Profile from '../Profile';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />

        <main>
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

export default withAuth(App);
