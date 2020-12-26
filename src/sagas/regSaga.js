import { takeEvery, call, put } from 'redux-saga/effects';
import { serverCheckin } from '../api';
import { CHECKIN, logIn } from '../actions';

export function* registrationSaga(action) {
    const {email, firstName, lastName, password} = action.payload;
    const token = yield call(serverCheckin, email, firstName, lastName, password);
    if (token) {
        yield put(logIn(token));
    }
}

export function* regSaga() {
    yield takeEvery(CHECKIN, registrationSaga);
}
