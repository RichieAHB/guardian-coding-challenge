import { h, Component, cloneElement } from 'preact';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TabButton from '../TabButton';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: props.children[0].attributes.id,
    };
  }

  componentDidMount() {
    this.tabButtons[Object.keys(this.tabButtons)[0]].select();
  }

  select(id, cb) {
    this.setState({
      selectedId: id,
    }, () => cb(id));
  }

  render({ children }, { selectedId }) {
    this.tabButtons = {};

    return (
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.tablist} role="tablist">
            {children.map(({ attributes: { id, label, zone, onClick = () => {} } }) => h(
              TabButton,
              {
                onClick: () => {
                  this.select(id, onClick);
                },
                label,
                zone,
                selected: id === selectedId,
                ref: (node) => { this.tabButtons[id] = node; },
                widthPc: 100 / children.length,
              },
            ))}
          </ul>
        </nav>
        <div className={styles.tabs}>
          {children.map(child => cloneElement(child, {
            active: child.attributes.id === selectedId,
          }))}
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired, // TODO: check these are tabs!
};
