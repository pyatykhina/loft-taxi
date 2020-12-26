import { takeEvery, call, put } from 'redux-saga/effects';
import { serverGetAddress } from '../api';
import { GET_ADDRESS, getAddressSuccess } from '../actions';

export function* getAddressListSaga(action) {
    const data = yield call(serverGetAddress);
    if (data) {
        yield put(getAddressSuccess(data));
    }
}

export function* addressListSaga() {
    yield takeEvery(GET_ADDRESS, getAddressListSaga);
}
