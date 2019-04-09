import * as React from 'react';

import {getAbbreviatedDate} from '../../common/utils';

import './index.css';

interface Props {
  title: string;
  date: Date;
}

export const BlogListItem: React.SFC<Props> = (props: Props) => {
  return (
    <div className="blog-list-item">
      <span className="blog-list-item__title">{props.title}</span>
      <span className="blog-list-item__date">{getAbbreviatedDate(props.date)}</span>
    </div>
  );
};

export default BlogListItem;
