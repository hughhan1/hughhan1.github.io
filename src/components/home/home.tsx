import * as React from 'react';

import Footer from '../footer/footer';

import './home.css';

interface Props {};

export const Home: React.SFC<Props> = (props: Props) => {
  return (
    <div className="home">
      <div className="home__body">
      	<span className="home__title">HUGH HAN</span>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
