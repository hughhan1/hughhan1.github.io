import * as React from 'react';
import classNames from 'classnames';

import Footer from '../footer';

import './index.css';

const FIVE_SECONDS_IN_MILLISECONDS = 5000;
const NUM_MODIFIERS = 1;

interface Props {}
interface State {
  modifier: number;
}

class Home extends React.Component<Props, State> {
  interval: NodeJS.Timeout | null;

  constructor(props: Props) {
    super(props);
    this.interval = null;
    this.state = {
      modifier: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        modifier: (this.state.modifier + 1) % NUM_MODIFIERS,
      });
    }, FIVE_SECONDS_IN_MILLISECONDS);
  }

  componentWillUnmount() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className={classNames('home', 'home--' + this.state.modifier)}>
        <div className="home__body">
          <span className={classNames('home__title', 'home__title--' + this.state.modifier)}>
            HUGH HAN
          </span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
