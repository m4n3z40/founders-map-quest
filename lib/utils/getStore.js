'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getStore;

var _redux = require('redux');

var _all = require('../reducers/all');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStore(initialState) {
    var appReducers = (0, _redux.combineReducers)(_all2.default);

    return (0, _redux.createStore)(appReducers, initialState);
}