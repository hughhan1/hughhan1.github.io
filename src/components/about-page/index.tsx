import * as React from 'react';
import {Link} from 'react-router-dom';

import Footer from '../footer';
import PageBody from '../page-body';
import PageContainer from '../page-container';
import Header from '../header';

import './index.css';

export const AboutPage: React.SFC<{}> = (props: {}) => {
  return (
    <PageContainer>
      <Header text="about" />
      <PageBody>
        <p>Hi! I’m Hugh.</p>
        <p>
          I'm a recent graduate from Johns Hopkins University where I studied computer science and
          applied mathematics. Before my current job at Dropbox, I had a gig doing business
          development in London and Copenhagen.
        </p>
        <p>
          I love photography, journaling, and late-romantic classical music. I'm a proponent of
          open-source software; I've previously worked on a{' '}
          <a href="https://github.com/mypyc/mypyc" target="_blank">
            Python compiler
          </a>
          ,{' '}
          <a href="https://github.com/mongodb/mongo" target="_blank">
            sharded database
          </a>
          , and university{' '}
          <a href="https://github.com/noahpresler/semesterly" target="_blank">
            course-scheduling platform
          </a>
          . In my free time I like to dance, read, shoot photos and videos, and play (what I think
          is) a mean game of Super Smash Bros Melee.
        </p>
        <p>
          Here are some additional things that make me happy.
          <ul>
            <li>photographs of fond memories</li>
            <li>friends</li>
          </ul>
        </p>
        <p>
          If you want to get to know me, please <Link to="/contact/">reach out</Link>! There are so
          few things in life that I find as beautiful as meaningful connections with other people.
        </p>
      </PageBody>
      <Footer />
    </PageContainer>
  );
};

export default AboutPage;
