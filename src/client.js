import 'babel-polyfill';
import {getStore} from './utils/shared';
import {getInitialState, renderApp} from './utils/client';

const initialState = getInitialState();
const store = getStore(initialState);

renderApp({store});
