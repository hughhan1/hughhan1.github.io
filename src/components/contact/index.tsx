import * as React from 'react';

import Header from '../header';

import './index.css';

interface Props {}

export const Contact: React.SFC<Props> = (props: Props) => {
  return (
    <div className="contact">
      <Header text="Contact" />
    </div>
  );
};

export default Contact;
