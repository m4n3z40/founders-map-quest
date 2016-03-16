'use strict';

// So we don't need to build the server files in development mode
if (process.env.NODE_ENV === 'development') {
    require('babel-register');
}

require('babel-polyfill');
var path = require('path');
var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var reactRedux = require('react-redux');
var getStore = require('./utils/getStore').default;
var renderingConfig = require('./config/rendering');

var server = express();

server.use(require('compression')());

server.use('/public', express.static(path.join(__dirname, '../public'), {
    // 10 days on production, 0 on developmnet
    maxAge: process.env.NODE_ENV === 'production' ? 864000000 : 0
}));

var MainTemplateCmp = React.createElement(require('./layouts/Main').default);
var mainTemplate = ReactDOMServer.renderToStaticMarkup(MainTemplateCmp);

var Provider = React.createFactory(reactRedux.Provider);
var App = React.createFactory(require('./components/App').default);

server.get('*', function renderServer(req, res) {
    var store = getStore();
    var layoutMarkup = ReactDOMServer.renderToString(Provider({ store: store }, App()));
    var initialState = store.getState();
    var finalMarkup = mainTemplate.replace(renderingConfig.APP_CONTENT_KEY, layoutMarkup).replace(renderingConfig.INITIAL_STATE_KEY, JSON.stringify(initialState));

    res.send(finalMarkup);
});

// Houston, we have loft off!!!
var serverInstance = server.listen(process.env.PORT || 3000, function () {
    var address = serverInstance.address();

    console.log('App started server at http://%s:%s', address.address, address.port);
});