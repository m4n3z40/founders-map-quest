// So we don't need to build the server files in development mode
if (process.env.NODE_ENV === 'development') {
    require('babel-register');
}

require('babel-polyfill');
const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const reactRedux = require('react-redux');
const getStore = require('./utils/getStore').default;
const renderingConfig = require('./config/rendering');

const server = express();

server.use(require('compression')());

server.use('/public', express.static(path.join(__dirname, '../public'), {
    // 10 days on production, 0 on developmnet
    maxAge: process.env.NODE_ENV === 'production' ? 864000000 : 0
}));

const MainTemplateCmp = React.createElement(require('./layouts/Main').default);
const mainTemplate = ReactDOMServer.renderToStaticMarkup(MainTemplateCmp);

const Provider = React.createFactory(reactRedux.Provider);
const App = React.createFactory(require('./components/App').default);

server.get('*', function renderServer(req, res) {
    const store = getStore();
    const layoutMarkup = ReactDOMServer.renderToString(
        Provider({store}, App())
    );
    const initialState = store.getState();
    const finalMarkup = mainTemplate
        .replace(renderingConfig.APP_CONTENT_KEY, layoutMarkup)
        .replace(renderingConfig.INITIAL_STATE_KEY, JSON.stringify(initialState));

    res.send(finalMarkup);
});

// Houston, we have loft off!!!
const serverInstance = server.listen(process.env.PORT || 3000, () => {
    const address = serverInstance.address();

    console.log('App started server at http://%s:%s', address.address, address.port);
});
