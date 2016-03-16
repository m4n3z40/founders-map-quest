// So we don't need to build the server files in development mode
if (process.env.NODE_ENV === 'development') {
    require('babel-register');
}

require('babel-polyfill');
const path = require('path');
const express = require('express');
const getStore = require('./utils/shared').getStore;
const serverUtils = require('./utils/server');

const server = express();

// Compress server response with gzip
server.use(require('compression')());

// Expose all public files
server.use('/public', express.static(path.join(__dirname, '../public'), {
    // 10 days on production, 0 on developmnet
    maxAge: process.env.NODE_ENV === 'production' ? 864000000 : 0
}));

// Catch all routes to render the App
server.get('*', function renderServer(req, res) {
    const store = getStore();
    const appMarkup = serverUtils.renderApp({store});
    const data = serverUtils.makeFullPageData(appMarkup, store.getState());
    const fullPageMarkup = serverUtils.renderFullPage(data);

    res.send(fullPageMarkup);
});

// Houston, we have lift off!!!
const serverInstance = server.listen(process.env.PORT || 3000, () => {
    const address = serverInstance.address();

    console.log('App started server at http://%s:%s', address.address, address.port);
});
