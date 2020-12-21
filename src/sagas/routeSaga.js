import { takeEvery, call, put } from 'redux-saga/effects';
import { serverGetRoute } from '../api';
import { GET_ROUTE, getRouteSuccess } from '../actions';

export function* getRouteSaga(action) {
    const {address1, address2} = action.payload;
    const data = yield call(serverGetRoute, address1, address2);
    if (data) {
        yield put(getRouteSuccess(data));
    }
}

export function* routeSaga() {
    yield takeEvery(GET_ROUTE, getRouteSaga);
}
