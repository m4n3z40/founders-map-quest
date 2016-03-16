'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Main;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rendering = require('../config/rendering');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deployTime = new Date().getTime();

function Main() {
    return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
            'head',
            null,
            _react2.default.createElement('meta', { charSet: 'utf-8' }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimal-ui' }),
            _react2.default.createElement(
                'title',
                null,
                'Founder\'s Map Quest'
            ),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/public/vendors/bootstrap/css/bootstrap.min.css' })
        ),
        _react2.default.createElement(
            'body',
            null,
            _react2.default.createElement(
                'div',
                { id: _rendering.ROOT_ELEMENT_ID },
                _rendering.APP_CONTENT_KEY
            ),
            _react2.default.createElement('script', { src: '/public/js/app.js?dt=' + deployTime }),
            _react2.default.createElement(
                'script',
                null,
                'window.' + _rendering.INITIAL_STATE_VARNAME + ' = ' + _rendering.INITIAL_STATE_KEY + ';'
            )
        )
    );
}