import { takeEvery, call, put } from 'redux-saga/effects';
import { serverLogin } from '../api';
import { AUTHENTICATE, logIn, logInError } from '../actions';

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const data = yield call(serverLogin, email, password);
    if (data.token) {
        yield put(logIn(data.token));
    } else {
        yield put(logInError(data.error));
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
}
