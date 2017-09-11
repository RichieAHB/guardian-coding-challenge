import { h } from 'preact';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

// Just an element for a more consistent API;
const Tab = ({ children, active }) => (
  <div
    role="tabpanel"
    className={cx({
      tab: true,
      active,
    })}
  >
    {children}
  </div>
);

Tab.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  children: null,
  onClick: () => {},
  active: false,
};

export default Tab;
