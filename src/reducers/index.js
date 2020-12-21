import { combineReducers } from 'redux';
import auth from './auth';
import card from './card';
import addresses from './addresses';

export default combineReducers({auth, card, addresses})
