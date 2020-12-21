import { GET_ROUTE_SUCCESS, LOG_OUT } from '../actions';

const initialState = {
    route: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type){
        case GET_ROUTE_SUCCESS: {
            return {
                route: action.payload.route
            }
        }
        case LOG_OUT: {
            return {
                route: []
            }
        }
        default:
            return state;
    }
}
