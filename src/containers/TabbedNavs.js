import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { removeFirst } from '../utils/ArrayUtils';
import { searchSection } from '../utils/WebAPIUtils';
import * as Tabs from '../components/Tabs';

export default class TabbedNavs extends Component {
  constructor(props) {
    super(props);

    this.loadingIDs = [];

    this.state = {};
  }

  onSelect(id) {
    if (!this.state[id] && this.loadingIDs.indexOf(id) === -1) {
      this.loadingIds = this.loadingIds.concat([id]);
      searchSection(id).then((json) => {
        this.loadingIDs = removeFirst(this.loadingIDs, id);
        this.setState({
          [id]: json,
        });
      });
    }
  }

  render() {
    return (
      <Tabs.Container>
        <Tabs.Tab id="test" label="Test" />
      </Tabs.Container>
    );
  }
}

TabbedNavs.defaultProps = {
  sections: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    zone: PropTypes.string.isRequired,
  }).isRequired,
};
