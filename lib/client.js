'use strict';

require('babel-polyfill');

var _react = require('react');

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _rendering = require('./config/rendering');

var _getStore = require('./utils/getStore');

var _getStore2 = _interopRequireDefault(_getStore);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)((0, _react.createElement)(_reactRedux.Provider, { store: (0, _getStore2.default)(global[_rendering.INITIAL_STATE_VARNAME]) }, (0, _react.createElement)(_App2.default)), document.getElementById(_rendering.ROOT_ELEMENT_ID));