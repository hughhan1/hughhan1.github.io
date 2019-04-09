import * as React from 'react';

import BlogList from '../blog-list/blog-list';
import BlogListItem from '../blog-list-item/blog-list-item';
import Footer from '../footer/footer';

import './blog.css';

interface Props {};

export const Blog: React.SFC<Props> = (props: Props) => {
  return (
    <div className="blog">
      <div className="blog__list">
        <BlogListItem
          title="Three days with a Leica M"
          date={new Date()}
         />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
