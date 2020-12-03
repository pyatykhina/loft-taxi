import { Component } from 'react';
import './Profile.scss';
import Header from '../Header';

import { withAuth } from '../../AuthContext';

class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        Profile
      </>
    );
  }
}

export default withAuth(Profile);
