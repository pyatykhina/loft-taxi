import { Component } from 'react';
import './App.scss';

import Header from '../Header';
import Login from '../Login';
import Checkin from '../Checkin';
import Map from '../Map';
import Profile from '../Profile';
import { withAuth } from '../../AuthContext';

const PAGES = {
  login: (props) => <Login {...props} />,
  checkin: (props) => <Checkin {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <Profile {...props} />
}

class App extends Component {
  state = {
    currentPage: 'login'
  }

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page})
    } else if (page === 'checkin') {
      this.setState({currentPage: 'checkin'})
    } else {
      this.setState({currentPage: 'login'})
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header navigate={this.navigateTo} />

        <main>
          <section>
            {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
          </section>
        </main>
      </div>
    );
  }
}

export default withAuth(App);
