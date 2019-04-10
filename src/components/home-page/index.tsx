import * as React from 'react';
import classNames from 'classnames';

import Footer from '../footer';
import PageContainer from '../page-container';

import './index.css';

const FIVE_SECONDS_IN_MILLISECONDS = 5000;
const NUM_MODIFIERS = 1;

interface State {
  modifier: number;
}

class HomePage extends React.Component<{}, State> {
  interval: NodeJS.Timeout | null;

  constructor(props: {}) {
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
      <PageContainer
        className={classNames('home-page', 'home-page--' + this.state.modifier)}
        isHomePage={true}
      >
        <div className={classNames('home-page__title', 'home-page__title--' + this.state.modifier)}>
          hugh han
          <Footer />
        </div>
      </PageContainer>
    );
  }
}

export default HomePage;
