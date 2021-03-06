import React from 'react';
import PropTypes from 'prop-types';
/**
 * ListViewAdditionalInfo defines additional info section
 */

const ListViewAdditionalInfo = ({
  children
}) => React.createElement("div", {
  className: "list-view-pf-additional-info"
}, children);

ListViewAdditionalInfo.propTypes = {
  /** Child nodes - an array of ListViewInfoItem instances */
  children: PropTypes.arrayOf(PropTypes.node)
};
ListViewAdditionalInfo.defaultProps = {
  children: null
};
export default ListViewAdditionalInfo;