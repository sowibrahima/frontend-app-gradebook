import React from 'react';
import PropTypes from 'prop-types';

/**
 * HistoryHeader
 * simple display container for an individual history table header
 * @param {string} id - header id
 * @param {string} label - header label
 * @param {string} value - header value
 */
const HistoryHeader = ({ id, label, value }) => (
  <div className={`grade-history-card grade-history-${id}`}>
    <div className="grade-history-card__label">{label}</div>
    <div className="grade-history-card__value">{value ?? '—'}</div>
  </div>
);
HistoryHeader.defaultProps = {
  value: null,
};
HistoryHeader.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default HistoryHeader;
