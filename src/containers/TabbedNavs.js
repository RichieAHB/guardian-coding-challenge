import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import SectionNav from '../components/SectionNav';
import { removeFirst } from '../utils/ArrayUtils';
import { searchSection } from '../utils/WebAPIUtils';
import * as Tabs from '../components/Tabs';
import Loader from '../components/Loader';

export default class TabbedNavs extends Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.loadingIDs = [];

    this.state = {};
  }

  onSelect(id) {
    if (!this.state[id] && this.loadingIDs.indexOf(id) === -1) {
      this.loadingIds = this.loadingIDs.concat([id]);
      searchSection(id).then(({ response: { results } }) => {
        this.loadingIDs = removeFirst(this.loadingIDs, id);
        this.setState({
          [id]: results,
        });
      });
    }
  }

  render({ sections }, state) {
    return (
      <Tabs.Container>
        {sections.map(({ id, label, zone }) => (
          <Tabs.Tab id={id} label={label} zone={zone} onClick={this.onSelect}>
            {state[id] ?
              (
                <div>
                  <SectionNav items={state[id]} zone={zone} />
                </div>
              ) : (
                <Loader />
              )
            }
          </Tabs.Tab>
        ))}
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
