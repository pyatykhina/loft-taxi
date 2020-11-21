import { Component } from 'react';
import './App.scss';

import Header from '../Header';
import Login from '../Login';
import Checkin from '../Checkin';
import Map from '../Map';
import Profile from '../Profile';

class App extends Component {
  state = {
    currentPage: 'login'
  }

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render() {
    return (
      <div className='wrapper'>
        <Header navigate={this.navigateTo}/>

        <main>
          <section>
            {this.state.currentPage === 'login' && <Login navigate={this.navigateTo}/>}
            {this.state.currentPage === 'checkin' && <Checkin navigate={this.navigateTo}/>}
            {this.state.currentPage === 'map' && <Map/>}
            {this.state.currentPage === 'profile' && <Profile/>}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
