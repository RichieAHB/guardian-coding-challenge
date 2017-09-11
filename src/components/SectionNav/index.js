import { h } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SectionNav = ({ items, zone }) => (
  <nav
    className={cx({
      [`zone-${zone}`]: zone,
    })}
  >
    <ul>
      {items.map(({ webTitle, webUrl }) => (
        <li>
          <a href={webUrl} title={webTitle}>{webTitle}</a>
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
