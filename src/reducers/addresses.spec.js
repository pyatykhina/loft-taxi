import { GET_ADDRESS_SUCCESS, LOG_OUT } from '../actions';
import addressesReducer, {initialState} from './addresses';

describe('addresses', () => {
    it('GET_ADDRESS_SUCCESS', () => {
        const action = {
            type: GET_ADDRESS_SUCCESS,
            payload: {}
        }
        expect(addressesReducer(initialState, action)).toEqual({
            ...initialState,
            addresses: action.payload.addresses
        })
    })

    it('LOG_OUT', () => {
        const action = {
            type: LOG_OUT
        }
        expect(addressesReducer(initialState, action)).toEqual({
            ...initialState,
            addresses: []
        })
    })
})
