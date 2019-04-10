import * as React from 'react';
import classNames from 'classnames';

import './index.css';

interface Props {
  className?: string;
  children?: React.ReactNode;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}

export const PageBody: React.SFC<Props> = (props: Props) => {
  return (
    <div
      className={classNames('page-body', props.className)}
      style={{alignItems: props.alignItems}}
    >
      {props.children}
    </div>
  );
};

export default PageBody;
