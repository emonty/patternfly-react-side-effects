import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../index';
import { noop } from '../../../common/helpers';
import { FILTER_LABEL } from '../constants';

const DualListFilter = ({
  onChange,
  side,
  placeHolder
}) => React.createElement("span", {
  className: "dual-list-pf-filter"
}, React.createElement("input", {
  onChange: onChange,
  type: "text",
  placeholder: placeHolder,
  autoComplete: "off",
  "data-side": side
}), React.createElement(Icon, {
  size: "lg",
  name: "search",
  className: "search-icon"
}));

DualListFilter.propTypes = {
  /** The filter function that runs on the list items when the input changes. */
  onChange: PropTypes.func,

  /** The side of the selector. */
  side: PropTypes.string,

  /** Filter's placeholder. */
  placeHolder: PropTypes.string
};
DualListFilter.defaultProps = {
  onChange: noop,
  side: null,
  placeHolder: FILTER_LABEL
};
export default DualListFilter;