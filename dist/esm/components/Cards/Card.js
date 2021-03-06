function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardDropdownButton from './CardDropdownButton';
import CardFooter from './CardFooter';
import CardGrid from './CardGrid';
import CardHeading from './CardHeading';
import CardHeightMatching from './CardHeightMatching';
import CardLink from './CardLink';
import CardTitle from './CardTitle';
import { AggregateStatusCount, AggregateStatusNotification, AggregateStatusNotifications } from './AggregateStatusCard';
import { UtilizationCard, UtilizationCardDetails, UtilizationCardDetailsCount, UtilizationCardDetailsDesc, UtilizationCardDetailsLine1, UtilizationCardDetailsLine2 } from './UtilizationTrendCard';
/**
 * Card Component for PatternFly React
 */

const Card = (_ref) => {
  let {
    children,
    className,
    accented,
    aggregated,
    aggregatedMini,
    matchHeight,
    cardRef
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "accented", "aggregated", "aggregatedMini", "matchHeight", "cardRef"]);

  const classes = classNames('card-pf', {
    'card-pf-accented': accented
  }, {
    'card-pf-aggregate-status': aggregated
  }, {
    'card-pf-aggregate-status card-pf-aggregate-status-mini': aggregatedMini
  }, {
    'card-pf-match-height': matchHeight
  }, className);
  return React.createElement("div", _extends({
    className: classes,
    ref: cardRef
  }, props), children);
};

Card.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,

  /** Additional element css classes */
  className: PropTypes.string,

  /** Top Card Accent Bool */
  accented: PropTypes.bool,

  /** Aggregate Card Bool */
  aggregated: PropTypes.bool,

  /** Aggregate Mini Card Bool */
  aggregatedMini: PropTypes.bool,

  /** Match Height Bool */
  matchHeight: PropTypes.bool,

  /** Reference prop */
  cardRef: PropTypes.func
};
Card.defaultProps = {
  className: '',
  accented: false,
  aggregated: false,
  aggregatedMini: false,
  matchHeight: false,
  cardRef: null
};
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Heading = CardHeading;
Card.Footer = CardFooter;
Card.Link = CardLink;
Card.Grid = CardGrid;
Card.DropdownButton = CardDropdownButton;
Card.HeightMatching = CardHeightMatching;
Card.AggregateStatusCount = AggregateStatusCount;
Card.AggregateStatusNotification = AggregateStatusNotification;
Card.AggregateStatusNotifications = AggregateStatusNotifications;
Card.UtilizationCard = UtilizationCard;
Card.UtilizationCardDetails = UtilizationCardDetails;
Card.UtilizationCardDetailsCount = UtilizationCardDetailsCount;
Card.UtilizationCardDetailsDesc = UtilizationCardDetailsDesc;
Card.UtilizationCardDetailsLine1 = UtilizationCardDetailsLine1;
Card.UtilizationCardDetailsLine2 = UtilizationCardDetailsLine2;
export default Card;