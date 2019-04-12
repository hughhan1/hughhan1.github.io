import * as React from 'react';

import Footer from '../footer';
import Header from '../header';
import PageBody from '../page-body';
import PageContainer from '../page-container';

interface Props {
  children?: React.ReactNode;
  title: string;
}

export const BlogPost: React.SFC<Props> = (props: Props) => {
  return (
    <PageContainer>
      <Header text={props.title} />
      <PageBody>{props.children}</PageBody>
      <Footer currentPage="blog" />
    </PageContainer>
  );
};

export default BlogPost;
