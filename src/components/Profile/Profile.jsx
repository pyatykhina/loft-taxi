import { Component } from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';

import { withAuth } from '../../AuthContext';

class Profile extends Component {
  static propTypes = {
    navigate: PropTypes.func
  }

  render() {
    return (
      <>Profile</>
    );
  }
}

export default withAuth(Profile);
