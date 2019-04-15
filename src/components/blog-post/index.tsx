import * as React from 'react';

import Footer from '../footer';
import Header from '../header';
import PageBody from '../page-body';
import PageContainer from '../page-container';

import {getNavigatorLanguage} from '../../common/utils';

import './index.css';

interface Props {
  children?: React.ReactNode;
  title: string;
  date: Date;
}

export const BlogPost: React.SFC<Props> = (props: Props) => {
  return (
    <PageContainer>
      <Header text={props.title} />
      <span className="blog-post__date">
        {props.date.toLocaleDateString(getNavigatorLanguage())}
      </span>
      <PageBody>{props.children}</PageBody>
      <Footer currentPage="blog" />
    </PageContainer>
  );
};

export default BlogPost;
