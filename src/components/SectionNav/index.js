import { h } from 'preact';
import PropTypes from 'prop-types';

const SectionNav = ({ items }) => (
  <nav>
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
};

SectionNav.defaultProps = {
  items: [],
};

export default SectionNav;
