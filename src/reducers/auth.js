import { LOG_IN, LOG_OUT } from '../actions';

const initialState = {
    isLoggedIn: window.localStorage.getItem('state')
        ? JSON.parse(window.localStorage.getItem('state')).isLoggedIn 
        : false,
    token: window.localStorage.getItem('state')
        ? JSON.parse(window.localStorage.getItem('state')).token 
        : false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState, action) {
    switch(action.type){
        case LOG_IN: {
            window.localStorage.setItem('state', JSON.stringify({
                isLoggedIn: true,
                token: action.payload
            }));
            return {
                isLoggedIn: true,
                token: action.payload
            }
        }
        case LOG_OUT: {
            window.localStorage.removeItem('state');
            return {
                isLoggedIn: false,
                token: ''
            }
        }
        default:
            return state;
    }
}
