import { setCardSuccess, getCardSuccess } from '../actions';
import { serverSetCard, serverGetCard } from '../api';
import { SET_CARD, GET_CARD } from '../actions'

export const cardMiddleware = (store) => (next) => async (action) => {
    if(action.type === SET_CARD) {
        const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
        const success = await serverSetCard(cardNumber, expiryDate, cardName, cvc, token);
        if(success) { 
            store.dispatch(setCardSuccess());  
        }
    } else if(action.type === GET_CARD) {
        const { token } = action.payload;
        const data = await serverGetCard(token);
        if(data) { 
            store.dispatch(getCardSuccess(data)); 
        }
    } else {
        next(action)
    }
}
 