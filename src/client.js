import 'babel-polyfill';
import {createElement} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {INITIAL_STATE_VARNAME, ROOT_ELEMENT_ID} from './config/rendering';
import getStore from './utils/getStore';
import App from './components/App';

render(
    createElement(
        Provider,
        {store: getStore(global[INITIAL_STATE_VARNAME])},
        createElement(App)
    ),
    document.getElementById(ROOT_ELEMENT_ID)
);
