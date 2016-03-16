"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main(props) {
    return _react2.default.createElement(
        "html",
        null,
        _react2.default.createElement(
            "head",
            null,
            _react2.default.createElement("meta", { charSet: "utf-8" }),
            _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, minimal-ui" }),
            _react2.default.createElement(
                "title",
                null,
                "Founder's Map Quest"
            ),
            _react2.default.createElement("link", { rel: "stylesheet", href: "/public/vendors/bootstrap/css/bootstrap.min.css" }),
            _react2.default.createElement("link", { rel: "stylesheet", href: "/public/css/app.css" })
        ),
        _react2.default.createElement(
            "body",
            null,
            _react2.default.createElement(
                "div",
                { id: "app-root" },
                props.children
            ),
            _react2.default.createElement("script", { src: "/public/js/app.js" })
        )
    );
}

Main.propTypes = {
    children: _react.PropTypes.node
};