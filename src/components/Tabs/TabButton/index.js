import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default class TabButton extends Component {
  select() {
    this.props.onClick();
  }

  render({ selected, onClick, label, widthPc, zone }) {
    return (
      <button
        style={{ width: `${widthPc}%` }}
        disabled={selected}
        role="tab"
        onClick={onClick}
        className={cx({
          tabButton: true,
          selected,
          [`zone-${zone}`]: zone,
        })}
      >
        <span
          className={cx({
            'zone-color': true,
            [styles.icon]: true,
          })}
        >
          {label.split('')[0]}
        </span>
        <span
          className={cx({
            'zone-color': true,
            [styles.text]: true,
          })}
        >
          {label}
        </span>
      </button>
    );
  }
}

TabButton.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  widthPc: PropTypes.number.isRequired,
};

TabButton.defaultProps = {
  selected: false,
  onClick: () => {},
};
