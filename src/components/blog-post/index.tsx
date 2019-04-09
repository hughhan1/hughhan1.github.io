import * as React from 'react';

import Footer from '../footer';

interface Props {}

export const BlogPost: React.SFC<Props> = (props: Props) => {
  return (
    <div className="blog-post">
      <Footer />
    </div>
  );
};

export default BlogPost;
