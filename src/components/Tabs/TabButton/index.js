import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default class TabButton extends Component {
  select() {
    this.props.onClick();
  }

  render({ selected, onClick, label }) {
    return (
      <button
        disabled={selected}
        role="tab"
        onClick={onClick}
        className={cx({
          tabButton: true,
          selected,
        })}
      >
        {label}
      </button>
    );
  }
}

TabButton.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

TabButton.defaultProps = {
  selected: false,
  onClick: () => {},
};
