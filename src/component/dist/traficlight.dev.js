"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RED = 0;
var YELLOW = 1;
var GREEN = 2;

var traficlight = function traficlight() {
  _classCallCheck(this, traficlight);

  this.state.currentColor = RED;
};