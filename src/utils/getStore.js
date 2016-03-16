import {combineReducers, createStore} from 'redux';
import allReducers from '../reducers/all';

export default function getStore(initialState) {
    const appReducers = combineReducers(allReducers);

    return createStore(appReducers, initialState);
}
