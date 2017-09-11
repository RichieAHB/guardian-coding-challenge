import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import SectionNav from '../components/SectionNav';
import { removeFirst } from '../utils/ArrayUtils';
import { searchSection } from '../utils/WebAPIUtils';
import * as Tabs from '../components/Tabs';

export default class TabbedNavs extends Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.loadingIDs = [];

    this.state = {};
  }

  async onSelect(id) {
    if (!this.state[id] && this.loadingIDs.indexOf(id) === -1) {
      this.loadingIds = this.loadingIDs.concat([id]);
      const { response: { results } } = await searchSection(id);
      this.loadingIDs = removeFirst(this.loadingIDs, id);
      this.setState({
        [id]: results,
      });
    }
  }

  render({ sections }, state) {
    return (
      <Tabs.Container>
        {sections.map(({ id, label }) => (
          <Tabs.Tab id={id} label={label} onClick={this.onSelect}>
            {state[id] ?
              (
                <div>
                  <SectionNav items={state[id]} />
                </div>
              ) : (
                <div>Loader</div>
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
