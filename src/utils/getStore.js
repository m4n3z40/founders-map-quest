import {combineReducers, createStore} from 'redux';
import allReducers from '../reducers/all';

const appReducers = combineReducers(allReducers);

export default function getStore(initialState) {
    return createStore(appReducers, initialState);
}
