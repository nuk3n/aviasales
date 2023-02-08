import statusReducer from './statusReducer';
import ticketsReducer from './ticketsReducer';
import filterReducer from './filterReducer';
import transferReducer from './transferReducer';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const rootReducer = combineReducers({
  status: statusReducer,
  tickets: ticketsReducer,
  filter: filterReducer,
  transfer: transferReducer,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
