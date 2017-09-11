import { h, Component } from 'preact';
import { removeFirst } from '../utils/ArrayUtils';
import { searchSection } from '../utils/WebAPIUtils';

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
      <div>Hello world</div>
    );
  }
}
