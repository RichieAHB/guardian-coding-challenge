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
      <div>
        <nav>
          <ul role="tablist">
            {children.map(({ attributes: { id, label, onClick = () => {} } }) => h(
              TabButton,
              {
                onClick: () => {
                  this.select(id, onClick);
                },
                label,
                selected: id === selectedId,
                ref: (node) => { this.tabButtons[id] = node; },
              },
            ))}
          </ul>
        </nav>
        <div>
          {children.map(child => (
            <div role="tabpanel">
              {cloneElement(child, {
                active: child.attributes.id === selectedId,
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired, // TODO: check these are tabs!
};
