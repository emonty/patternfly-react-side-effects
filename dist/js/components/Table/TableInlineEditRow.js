"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableConfirmButtonsRow = _interopRequireDefault(require("./TableConfirmButtonsRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TableInlineEditRow = function TableInlineEditRow(props) {
  var buttonsPosition = function buttonsPosition(window, rowDimensions) {
    var position = {};

    if (props.last) {
      position.bottom = window.height - rowDimensions.top - 1;
    } else {
      position.top = rowDimensions.bottom - 1;
    }

    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  var buttonsClassName = props.last ? 'top' : 'bottom';
  return _react["default"].createElement(_TableConfirmButtonsRow["default"], _extends({}, props, {
    buttonsPosition: buttonsPosition,
    buttonsClassName: buttonsClassName
  }));
};

TableInlineEditRow.shouldComponentUpdate = true;
TableInlineEditRow.defaultProps = _objectSpread({}, _TableConfirmButtonsRow["default"].defaultProps, {
  last: false
});
TableInlineEditRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: _propTypes["default"].func,

  /** Confirm edit callback */
  onConfirm: _propTypes["default"].func,

  /** Cancel edit callback */
  onCancel: _propTypes["default"].func,

  /** Flag to indicate last row */
  last: _propTypes["default"].bool,

  /** Row cells */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /** Message text inputs for i18n */
  messages: _propTypes["default"].shape({
    confirmButtonLabel: _propTypes["default"].string,
    cancelButtonLabel: _propTypes["default"].string
  })
};
var _default = TableInlineEditRow;
exports["default"] = _default;