import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { HomeReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            home: HomeReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}