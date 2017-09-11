import { h } from 'preact';
import PropTypes from 'prop-types';

const TabButton = ({ selected, onClick, label }) => (
  <button
    role="tab"
    onClick={onClick}
  >
    {label}
  </button>
);

TabButton.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

TabButton.defaultProps = {
  selected: false,
  onClick: () => {},
};

export default TabButton;
