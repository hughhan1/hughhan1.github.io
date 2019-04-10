import * as React from 'react';
import classNames from 'classnames';

import './index.css';

interface Props {
  className?: string;
  children?: React.ReactNode;
  isHomePage?: boolean;
}

export const PageContainer: React.SFC<Props> = (props: Props) => {
  return (
    <div className={classNames('page-container', props.className)}>
      <div
        className={classNames({
          'page-content': true,
          'home-page-content': props.isHomePage,
        })}
      >
        {props.children}
      </div>
    </div>
  );
};

PageContainer.defaultProps = {
  isHomePage: false,
};

export default PageContainer;
