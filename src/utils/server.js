import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import {APP_CONTENT_KEY, INITIAL_STATE_KEY} from '../config/rendering';
import Main from '../layouts/Main';
import App from '../components/App';

const cache = Object.create(null);

export function makeFullPageData(appMarkup, appState = {}) {
    const data = {};

    data[APP_CONTENT_KEY] = appMarkup;
    data[INITIAL_STATE_KEY] = JSON.stringify(appState);

    return data;
}

export function renderApp(props) {
    return ReactDOMServer.renderToString(
        <Provider {...props}>
            <App {...props} />
        </Provider>
    );
}

function getMainLayout() {
    if (!cache.mainLayout) {
        cache.mainLayout = ReactDOMServer.renderToStaticMarkup(<Main />);
    }

    return cache.mainLayout;
}

function replaceTemplateVars(template, data) {
    let markup = template;

    if (data) {
        Object.keys(data).forEach(varName => {
            markup = markup.replace(varName, data[varName]);
        });
    }

    return markup;
}

export function renderFullPage(data) {
    const layoutMarkup = getMainLayout();

    return replaceTemplateVars(layoutMarkup, data);
}
