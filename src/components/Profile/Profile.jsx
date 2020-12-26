import { Component } from 'react';
import './Profile.scss';
import Header from '../Header';
import { getCard } from '../../actions';
import { connect } from 'react-redux';
import { ProfileForm } from './ProfileForm';

class Profile extends Component {
  componentDidMount() {
    this.props.getCard(this.props.token);
  }

  render() {
    return (
      <>
      <Header />
      <div className='form profile-form'> 
        <h2 style={{marginBottom:'10px'}}>Профиль</h2>
        Способ оплаты
        <ProfileForm {...this.props}/>
      </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    token: state.auth.token,
    cardNumber: state.card.cardNumber,
    expiryDate: state.card.expiryDate,
    cardName: state.card.cardName,
    cvc: state.card.cvc
  }),
  { getCard }
)(Profile);
