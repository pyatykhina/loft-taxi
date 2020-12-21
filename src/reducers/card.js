import { SET_CARD_SUCCESS, GET_CARD_SUCCESS, LOG_OUT } from '../actions';

const initialState = {
    cardNumber: window.localStorage.getItem('card')
        && JSON.parse(window.localStorage.getItem('card')).cardNumber,
    expiryDate: window.localStorage.getItem('card')
        && JSON.parse(window.localStorage.getItem('card')).expiryDate,
    cardName: window.localStorage.getItem('card')
        && JSON.parse(window.localStorage.getItem('card')).cardName,
    cvc: window.localStorage.getItem('card')
        && JSON.parse(window.localStorage.getItem('card')).cvc,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type){
        case SET_CARD_SUCCESS: {
            return state;
        }
        case GET_CARD_SUCCESS: {
            window.localStorage.setItem('card', JSON.stringify({
                cardNumber: action.payload.cardNumber, 
                expiryDate: action.payload.expiryDate, 
                cardName: action.payload.cardName, 
                cvc: action.payload.cvc
            }));
            return {
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                cardName: action.payload.cardName,
                cvc: action.payload.cvc
            }
        }
        case LOG_OUT: {
            window.localStorage.removeItem('card');
            return {
                cardNumber: '',
                expiryDate: '',
                cardName: '',
                cvc: ''
            }
        }
        default:
            return state;
    }
}
