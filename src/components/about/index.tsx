import * as React from 'react';

import Footer from '../footer';
import Header from '../header';

import './index.css';

interface Props {}

export const About: React.SFC<Props> = (props: Props) => {
  return (
    <div className="about">
      <Header text="About" />
      <div className="about__body">
        <p>
          <b>Hi! I’m Hugh.</b>
        </p>
        <p>
          I'm a recent graduate from Johns Hopkins University where I studied computer science and
          applied mathematics. I've previously worked on{' '}
          <a href="https://github.com/mypyc/mypyc" target="_blank">
            compilers
          </a>
          ,{' '}
          <a href="https://github.com/mongodb/mongo" target="_blank">
            distributed systems
          </a>
          , and machine learning research. I'm currently working on product at Dropbox. Feel free to
          check out my (hopefully) up-to-date resume.
        </p>
        <p>Outside of academia, I’m interested in photography, classical piano, and urban dance.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
