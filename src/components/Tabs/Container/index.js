import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TabButton from '../TabButton';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default class Container extends Component {
  constructor(props) {
    super(props);

    console.log(props.children[0].attributes.id);

    this.state = {
      selectedId: props.children[0].attributes.id,
    };
  }

  select(id) {

  }

  render({ children }, { selectedId }) {
    this.tabs = {};

    return (
      <div>
        <nav>
          <ul role="tablist">
            {children.map(({ attributes: { id, label } }) => h(
              TabButton,
              {
                onClick: () => this.select(id),
                label,
                selected: id === selectedId,
              },
            ))}
          </ul>
        </nav>
        <div>
          {children.map(child => {
            <div
              className={cx({
                active: child.attributes.id === selectedId
              })}
              role="tabpanel"
            >
              {child}
            </div>
          })}
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired, // TODO: check these are tabs!
};
