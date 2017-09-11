import { h } from 'preact';
import TabbedNavs from '../containers/TabbedNavs';

const App = () => (
  <TabbedNavs
    sections={[
      {
        id: 'uk-news',
        label: 'UK News',
        zone: 'news',
      },
      {
        id: 'travel',
        label: 'Travel',
        zone: 'travel',
      },
      {
        id: 'football',
        label: 'Football',
        zone: 'sport',
      },
    ]}
  />
);

export default App;
