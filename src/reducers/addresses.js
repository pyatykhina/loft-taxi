import { GET_ADDRESS_SUCCESS, LOG_OUT } from '../actions';

const initialState = {
    addresses: window.localStorage.getItem('addresses')
        && JSON.parse(window.localStorage.getItem('addresses')) 
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type){
        case GET_ADDRESS_SUCCESS: {
            window.localStorage.setItem('addresses', JSON.stringify({
                addresses: action.payload.addresses
            }));
            return {
                addresses: action.payload.addresses
            }
        }
        case LOG_OUT: {
            window.localStorage.removeItem('addresses');
            return {
                addresses: []
            }
        }
        default:
            return state;
    }
}
