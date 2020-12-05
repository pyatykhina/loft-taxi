import { logIn } from './actions';
import { serverLogin, serverCheckin } from './api';
import { AUTHENTICATE, CHECKIN } from './actions'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const { email, password } = action.payload;
        const success = await serverLogin(email, password);
        if(success) {
            store.dispatch(logIn());
        }
    } else if(action.type === CHECKIN) {
        const { email, firsName, lastName, password } = action.payload;
        const success = await serverCheckin(email, firsName, lastName, password);
        if(success) {
            store.dispatch(logIn());
        }
    } else {
        next(action)
    }
}
 