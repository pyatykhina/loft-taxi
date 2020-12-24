import { GET_ROUTE_SUCCESS, LOG_OUT } from '../actions';
import routeReducer, {initialState} from './route';

describe('route', () => {
    it('GET_ADDRESS_SUCCESS', () => {
        const action = {
            type: GET_ROUTE_SUCCESS,
            payload: {}
        }
        expect(routeReducer(initialState, action)).toEqual({
            ...initialState,
            route: action.payload.route
        })
    })

    it('LOG_OUT', () => {
        const action = {
            type: LOG_OUT
        }
        expect(routeReducer(initialState, action)).toEqual({
            ...initialState,
            route: []
        })
    })
})
