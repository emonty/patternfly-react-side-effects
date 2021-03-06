import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Dropdown } from '../Dropdown';
import { ButtonGroup } from '../Button';
/**
 * DropdownKebab Component for Patternfly React
 */

const DropdownKebab = ({
  className,
  children,
  id,
  pullRight,
  componentClass,
  title,
  toggleStyle
}) => {
  const kebabClass = classNames('dropdown-kebab-pf', className);
  return React.createElement(Dropdown, {
    className: kebabClass,
    id: id,
    pullRight: pullRight,
    componentClass: componentClass
  }, React.createElement(Dropdown.Toggle, {
    bsStyle: toggleStyle,
    title: title,
    noCaret: true
  }, React.createElement(Icon, {
    name: "ellipsis-v"
  })), React.createElement(Dropdown.Menu, null, children));
};

DropdownKebab.propTypes = {
  /** additional kebab dropdown classes */
  className: PropTypes.string,

  /** children nodes  */
  children: PropTypes.node,

  /** kebab dropdown id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /** menu right aligned */
  pullRight: PropTypes.bool,

  /** dropdown component class */
  componentClass: PropTypes.func,

  /** title for kebab */
  title: PropTypes.string,

  /** toggle style */
  toggleStyle: PropTypes.string
};
DropdownKebab.defaultProps = {
  className: '',
  children: null,
  pullRight: false,
  componentClass: ButtonGroup,
  title: '',
  toggleStyle: 'link'
};
export default DropdownKebab;