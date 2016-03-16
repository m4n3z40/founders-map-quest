'use strict';

// So we don't need to build the server files in development mode
if (process.env.NODE_ENV === 'development') {
    require('babel-register');
}

require('babel-polyfill');
var express = require('express');

var server = express();

server.use(require('compression')());

server.use('/public', express.static('../public', {
    // 10 days on production, 0 on developmnet
    maxAge: process.env.NODE_ENV === 'production' ? 864000000 : 0
}));

server.get('*', function renderServer(req, res) {});

// Houston, we have loft off!!!
var serverInstance = server.listen(process.env.PORT || 3000, function () {
    var address = serverInstance.address();

    console.log('App started server at http://%s:%s', address.address, address.port);
});