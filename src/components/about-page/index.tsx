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
          I previously worked on a few open source projects: most notably a{' '}
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
          .
        </p>
        <p>
          I love photography, journaling, and late-romantic classical music. In my free time I like
          to dance, read, shoot photos and videos, and play (what I think is) a mean game of Super
          Smash Bros Melee.
        </p>
        <p>
          Here are some additional things that make me happy.
          <ul>
            <li>mediocrely taken photographs of fond memories</li>
            <li>well yet concisely documented code</li>
            <li>
              Rachmaninoff's{' '}
              <a href="https://www.youtube.com/watch?v=ShvUF-ucOSg" target="_blank">
                lilacs
              </a>
            </li>
            <li>family</li>
            <li>friends who love me</li>
          </ul>
        </p>
        <p>
          If you want to get to know me, please <Link to="/contact/">reach out</Link>! There are so
          few things in life that I find as beautiful as meaningful connections with other people.
        </p>
        <p>Thanks for stopping by!</p>
      </PageBody>
      <Footer currentPage="about" />
    </PageContainer>
  );
};

export default AboutPage;
