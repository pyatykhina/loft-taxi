import { Component } from 'react';
import './Profile.scss';
import Header from '../Header';
import { connect } from 'react-redux';
import { setCard } from '../../actions';

import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import { MCIcon } from 'loft-taxi-mui-theme';

class Profile extends Component {
  state = {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: ''
  }

  componentDidMount() {
    this.setState({ cardNumber: JSON.parse(window.localStorage.getItem('card')).cardNumber });
    this.setState({ expiryDate: JSON.parse(window.localStorage.getItem('card')).expiryDate });
    this.setState({ cardName: JSON.parse(window.localStorage.getItem('card')).cardName });
    this.setState({ cvc: JSON.parse(window.localStorage.getItem('card')).cvc })
  }
  
  setCard = e => {
    e.preventDefault();
    const {cardNumber, expiryDate, cardName, cvc} = e.target ;
    this.props.setCard(cardNumber.value, expiryDate.value, cardName.value, cvc.value); 
  };

  render() {
    const { cardNumber, expiryDate, cardName, cvc } = this.state;
    return (
      <>
      <Header />
      <div className='form profile-form'> 
        <h2 style={{marginBottom:'10px'}}>Профиль</h2>
        Способ оплаты
        <form onSubmit={this.setCard} className='profile'>
          <div className='profile__subforms'>
            <div className='profile__subforms-item'>
              <MCIcon className='mastercard-icon'/>
              <FormLabel className='profile__label'>
                Номер карты:
                <Input 
                  className='profile__input'
                  placeholder='0000 0000 0000 0000'
                  type='text'
                  name='cardNumber'
                  value={cardNumber} 
                  onChange={e => this.setState({ cardNumber: e.target.value })} 
                />
              </FormLabel>
              <FormLabel className='profile__label' style={{width:'40%'}}>
                Срок действия:
                <Input 
                  className='profile__input'
                  placeholder='12/20'
                  type='text'
                  name='expiryDate'
                  value={expiryDate} 
                  onChange={e => this.setState({ expiryDate: e.target.value })} 
                />
              </FormLabel>
            </div>
            <div className='profile__subforms-item'>
              <FormLabel className='profile__label'>
                Имя владельца:
                <Input 
                  className='profile__input'
                  placeholder='USER NAME'
                  type='text'
                  name='cardName'
                  value={cardName} 
                  onChange={e => this.setState({ cardName: e.target.value })} 
                />
              </FormLabel>
              <FormLabel className='profile__label' style={{width:'40%'}}>
                CVC:
                <Input 
                  className='profile__input'
                  placeholder='***'
                  type='text'
                  name='cvc'
                  value={cvc} 
                  onChange={e => this.setState({ cvc: e.target.value })} 
                />
              </FormLabel>
            </div>
          </div>
          <button type='submit' className='profile__button'>Сохранить</button>
        </form>
      </div>
      </>
    );
  }
}

export default connect(
  (state) => ({token: state.auth.token}),
  { setCard }
)(Profile);
