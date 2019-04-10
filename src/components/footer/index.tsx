import * as React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import {Pages, Routes} from '../../common/routes';

import './index.css';

interface Props {
  className?: string;
  currentPage: string;
}

export const Footer: React.SFC<Props> = (props: Props) => {
  return (
    <div className={classNames('footer', props.className)}>
      <div className="footer-navigation">
        {Pages.filter(page => page !== props.currentPage).map((page, index) => (
          <span>
            <span className="footer-navigation__item">
              <Link to={Routes[page]}>{page}</Link>
            </span>
            {index < Pages.length - 2 && '·'}
          </span>
        ))}
      </div>
      <div className="footer-copyright">© {new Date().getFullYear()} hugh han</div>
    </div>
  );
};

export default Footer;
