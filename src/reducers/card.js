import { SET_CARD_SUCCESS, GET_CARD_SUCCESS } from '../actions';

const initialState = {
    loggedIn: true,
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type){
        case SET_CARD_SUCCESS: {
            return state;
        }
        case GET_CARD_SUCCESS: {
            return Object.assign({}, state, {
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                cardName: action.payload.cardName,
                cvc: action.payload.cvc
            });    
        }
        default:
            return state;
    }
}
