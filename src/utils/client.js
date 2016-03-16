import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {INITIAL_STATE_VARNAME, ROOT_ELEMENT_ID} from '../config/rendering';
import App from '../components/App';

export function getInitialState() {
    return global[INITIAL_STATE_VARNAME] || {};
}

export function renderApp(props) {
    render(
        <Provider {...props}>
            <App {...props} />
        </Provider>,
        document.getElementById(ROOT_ELEMENT_ID)
    );
}
