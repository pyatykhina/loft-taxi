import { takeEvery, call, put } from 'redux-saga/effects';
import { serverSetCard, serverGetCard } from '../api';
import { SET_CARD, GET_CARD, setCardSuccess, getCardSuccess, getCard } from '../actions';

export function* setCardSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
    const success = yield call(serverSetCard, cardNumber, expiryDate, cardName, cvc, token);
    if (success) {
        yield put(setCardSuccess());
        yield put(getCard(token));
    }
}

export function* getCardSaga(action) {
    const {token} = action.payload;
    const data = yield call(serverGetCard, token);
    if (data) {
        yield put(getCardSuccess(data));
    }
}

export function* cardSaga() {
    yield takeEvery(SET_CARD, setCardSaga);
    yield takeEvery(GET_CARD, getCardSaga);
}
