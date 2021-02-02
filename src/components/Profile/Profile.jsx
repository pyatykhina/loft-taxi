import { Component } from 'react';
import './Profile.scss';
import Header from '../Header';
import { getCard } from '../../actions';
import { connect } from 'react-redux';
import { ProfileForm } from './ProfileForm';
import GoToMapModal from '../GoToMapModal';

class Profile extends Component {
  state = {
    updateCardData: false
  }

  componentDidMount() {
    this.props.getCard(this.props.token);
  }

  updateCardData = (value) => {
    value === true && this.setState({updateCardData: value})
  }

  render() {
    return (
      <>
      <Header />
      {
        this.state.updateCardData 
          ? <GoToMapModal />
          : <div className='form profile-form'> 
              <h2 style={{marginBottom:'10px'}}>Профиль</h2>
              Способ оплаты
              <ProfileForm updateCardData={this.updateCardData} {...this.props}/>
            </div>
      }
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
