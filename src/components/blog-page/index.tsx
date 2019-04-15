import * as React from 'react';

import Footer from '../footer';
import Header from '../header';
import PageBody from '../page-body';
import PageContainer from '../page-container';

import {getAbbreviatedDate} from '../../common/utils';

import './index.css';
import {Link} from 'react-router-dom';
import {BlogRoutesMap} from '../../common/routes';

export const BlogPage: React.SFC<{}> = (props: {}) => {
  return (
    <PageContainer>
      <Header text="blog" />
      <PageBody>
        <BlogListSection title="2017 ¬">
          <BlogListItem title="Three days with a Leica M" date={new Date(2017, 11, 25)} />
          <BlogListItem title="Working at MongoDB" date={new Date(2017, 8, 31)} />
          <BlogListItem title="The Great Ocean Road" date={new Date(2017, 6, 7)} />
          <BlogListItem title="Classifying Artwork" date={new Date(2017, 5, 25)} />
          <BlogListItem title="Yayoi Kusama" date={new Date(2017, 5, 6)} />
        </BlogListSection>
      </PageBody>
      <Footer currentPage="blog" />
    </PageContainer>
  );
};

export default BlogPage;

interface BlogListItemProps {
  title: string;
  date: Date;
}

const BlogListItem: React.SFC<BlogListItemProps> = (props: BlogListItemProps) => {
  const route = BlogRoutesMap[props.title.replace(/\s+/g, '-').toLowerCase()];
  return (
    <div className="blog-list-item">
      <span className="blog-list-item__title">
        <Link to={route}>{props.title}</Link>
      </span>
      <span className="blog-list-item__date">{getAbbreviatedDate(props.date)}</span>
    </div>
  );
};

interface BlogListSectionProps {
  children?: React.ReactNode;
  title: string;
}

const BlogListSection: React.SFC<BlogListSectionProps> = (props: BlogListSectionProps) => {
  return (
    <div className="blog-list-section">
      <div className="blog-list-section__title">{props.title}</div>
      {props.children}
    </div>
  );
};
