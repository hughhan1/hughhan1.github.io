import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './index.css';

interface Props {
  className?: string;
}

export const Footer: React.SFC<Props> = (props: Props) => {
  return (
    <div className={classNames('footer', props.className)}>
      <span className="footer__item">
        <Link to="/">home</Link>
      </span>
      {' · '}
      <span className="footer__item">
        <Link to="/about/">about</Link>
      </span>
      {' · '}
      <span className="footer__item">
        <Link to="/blog/">blog</Link>
      </span>
      {' · '}
      <span className="footer__item">
        <Link to="/contact/">contact</Link>
      </span>
    </div>
  );
};

export default Footer;
