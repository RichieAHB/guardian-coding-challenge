import { h } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.scss';

const SectionNav = ({ items, zone }) => (
  <nav
    className={cx({
      [`zone-${zone}`]: zone,
    })}
  >
    <ul className={styles.list}>
      {items.map(({ webTitle, webUrl }) => (
        <li className={styles.item}>
          <a className={styles.link} href={webUrl} title={webTitle}>{webTitle}</a>
        </li>
      ))}
    </ul>
  </nav>
);

SectionNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    webTitle: PropTypes.string.isRequired,
    webUrl: PropTypes.string.isRequired,
  })),
  zone: PropTypes.string,
};

SectionNav.defaultProps = {
  items: [],
  zone: null,
};

export default SectionNav;
