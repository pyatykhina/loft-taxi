import { Component } from 'react';
import './Profile.scss';

import { withAuth } from '../../AuthContext';

class Profile extends Component {
  render() {
    return (
      <>Profile</>
    );
  }
}

export default withAuth(Profile);
