import * as React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

interface Props {}

export const Footer: React.SFC<Props> = (props: Props) => {
  return (
    <div className="footer">
      <span className="footer__item">
        <Link to="/">Home</Link>
      </span>
      {' · '}
      <span className="footer__item">
        <Link to="/about/">About</Link>
      </span>
      {' · '}
      <span className="footer__item">
        <Link to="/blog/">Blog</Link>
      </span>
    </div>
  );
};

export default Footer;
