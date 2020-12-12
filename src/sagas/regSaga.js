import { takeEvery, call, put } from 'redux-saga/effects';
import { serverCheckin } from '../api';
import { CHECKIN, logIn } from '../actions';

export function* registrationSaga(action) {
    const {email, firstName, lastName, password} = action.payload;
    const success = yield call(serverCheckin, email, firstName, lastName, password);
    if (success) {
        yield put(logIn());
    }
}

export function* regSaga() {
    yield takeEvery(CHECKIN, registrationSaga);
}
