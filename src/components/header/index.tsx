import * as React from 'react';

import './index.css';

interface Props {
  text: string;
}

export const Header: React.SFC<Props> = (props: Props) => {
  return <div className="header">{props.text}</div>;
};

export default Header;
