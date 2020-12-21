import { takeEvery, call, put } from 'redux-saga/effects';
import { serverCheckin } from '../api';
import { CHECKIN, logIn, getCard, getAddress } from '../actions';

export function* registrationSaga(action) {
    const {email, firstName, lastName, password} = action.payload;
    const token = yield call(serverCheckin, email, firstName, lastName, password);
    if (token) {
        yield put(logIn(token));
        yield put(getCard(token));
        yield put(getAddress());
    }
}

export function* regSaga() {
    yield takeEvery(CHECKIN, registrationSaga);
}
