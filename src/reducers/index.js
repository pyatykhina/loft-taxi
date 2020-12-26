import { combineReducers } from 'redux';
import auth from './auth';
import card from './card';
import addresses from './addresses';
import route from './route';

export default combineReducers({auth, card, addresses, route})
