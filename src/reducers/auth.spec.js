import { LOG_IN, LOG_OUT } from '../actions';
import authReducer, {initialState} from './auth';

describe('auth', () => {
    it('LOG_IN', () => {
        const action = {
            type: LOG_IN
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: true,
            token: action.payload
        })
    })

    it('LOG_OUT', () => {
        const action = {
            type: LOG_OUT
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: false,
            token: ''
        })
    })
})