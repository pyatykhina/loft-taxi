import { takeEvery, call, put } from 'redux-saga/effects';
import { serverLogin } from '../api';
import { AUTHENTICATE, logIn } from '../actions';

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const token = yield call(serverLogin, email, password);
    if (token) {
        yield put(logIn(token));
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga);
}
