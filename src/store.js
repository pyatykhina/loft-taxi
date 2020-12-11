import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './middlewares/authMiddleware';
import { cardMiddleware } from './middlewares/cardMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(authMiddleware, cardMiddleware))); 
