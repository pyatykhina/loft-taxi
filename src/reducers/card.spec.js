import { SET_CARD_SUCCESS, GET_CARD_SUCCESS, LOG_OUT } from '../actions';
import cardReducer, {initialState} from './card';

describe('card', () => {
    it('SET_CARD_SUCCESS', () => {
        const action = {
            type: SET_CARD_SUCCESS
        }
        expect(cardReducer(initialState, action)).toEqual({
            ...initialState,
            cardNumber: '',
            expiryDate: '',
            cardName: '',
            cvc: ''
        })
    })

    it('GET_CARD_SUCCESS', () => {
        const action = {
            type: GET_CARD_SUCCESS
        }
        expect(cardReducer(initialState, action)).toEqual({
            ...initialState,
            cardNumber: action.payload,
            expiryDate: action.payload,
            cardName: action.payload,
            cvc: action.payload
        })
    })

    it('LOG_OUT', () => {
        const action = {
            type: LOG_OUT
        }
        expect(cardReducer(initialState, action)).toEqual({
            ...initialState,
            cardNumber: '',
            expiryDate: '',
            cardName: '',
            cvc: ''
        })
    })
})