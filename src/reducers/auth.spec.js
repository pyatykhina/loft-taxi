import { LOG_IN, LOG_OUT, LOG_IN_ERROR } from '../actions';
import authReducer, {initialState} from './auth';

describe('auth', () => {
    it('LOG_IN', () => {
        const action = {
            type: LOG_IN
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: true,
            token: action.payload,
            error: ''
        })
    })

    it('LOG_IN_ERROR', () => {
        const action = {
            type: LOG_IN_ERROR
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: false,
            token: '',
            error: action.payload
        })
    })

    it('LOG_OUT', () => {
        const action = {
            type: LOG_OUT
        }
        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: false,
            token: '',
            error: ''
        })
    })
})
