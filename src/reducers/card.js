import { SET_CARD_SUCCESS, GET_CARD_SUCCESS, LOG_OUT } from '../actions';

const initialState = {
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
            return {
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                cardName: action.payload.cardName,
                cvc: action.payload.cvc
            }
        }
        case LOG_OUT: {
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
