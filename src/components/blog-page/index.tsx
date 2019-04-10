import * as React from 'react';

import Footer from '../footer';
import Header from '../header';
import PageBody from '../page-body';
import PageContainer from '../page-container';

import {getAbbreviatedDate} from '../../common/utils';

import './index.css';

export const BlogPage: React.SFC<{}> = (props: {}) => {
  return (
    <PageContainer>
      <Header text="blog" />
      <PageBody>
        <BlogListSection title="2017 ¬">
          <BlogListItem title="Three days with a Leica M" date={new Date()} />
          <BlogListItem title="Working at MongoDB" date={new Date()} />
          <BlogListItem title="The Great Ocean Road" date={new Date()} />
          <BlogListItem title="Classifying Artwork" date={new Date()} />
          <BlogListItem title="Yayoi Kusama" date={new Date()} />
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
  return (
    <div className="blog-list-item">
      <span className="blog-list-item__title">
        <a href="">{props.title}</a>
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
