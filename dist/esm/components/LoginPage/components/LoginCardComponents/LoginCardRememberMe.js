function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../../common/helpers';

const LoginCardRememberMe = (_ref) => {
  let {
    onClick,
    label,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onClick", "label", "className"]);

  return label && React.createElement("label", {
    className: `checkbox-label ${className}`
  }, React.createElement("input", _extends({}, props, {
    type: "checkbox",
    onClick: onClick
  })), " ", label);
};

LoginCardRememberMe.propTypes = {
  /** The checkbox label. */
  label: PropTypes.string,

  /** Additional css classes. */
  className: PropTypes.string,

  /** Callback to trigger when clicking the checkbox */
  onClick: PropTypes.func
};
LoginCardRememberMe.defaultProps = {
  label: null,
  className: '',
  onClick: noop
};
export default LoginCardRememberMe;