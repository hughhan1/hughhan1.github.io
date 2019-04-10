import * as React from 'react';

import Footer from '../footer';
import Header from '../header';
import PageBody from '../page-body';
import PageContainer from '../page-container';

import './index.css';

export const ContactPage: React.SFC<{}> = (props: {}) => {
  return (
    <PageContainer>
      <Header text="contact" />
      <PageBody alignItems="center">
        Let's get in touch!
        <ContactForm />
      </PageBody>
      <Footer />
    </PageContainer>
  );
};

export default ContactPage;

const ContactForm: React.SFC<{}> = (props: {}) => {
  return (
    <form
      className="contact-form"
      name="contact-form"
      action="https://formspree.io/hughhan1@gmail.com"
      method="POST"
    >
      <input
        className="contact-form__input-field"
        type="text"
        name="name"
        minLength={3}
        placeholder="your name"
        required
      />
      <input
        className="contact-form__input-field"
        type="email"
        name="_replyto"
        minLength={3}
        placeholder="your email address"
        required
      />
      <textarea
        className="contact-form__input-field expanding"
        name="message"
        placeholder="your message"
        maxLength={320}
        required
      />
      <button className="submit-form-button" type="submit" value="Send">
        <svg
          version="1.1"
          className="send-icn"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100px"
          height="36px"
          viewBox="0 0 100 36"
          enable-background="new 0 0 100 36"
          xmlSpace="preserve"
        >
          <path
            d="M100,0L100,0 M23.8,7.1L100,0L40.9,36l-4.7-7.5L22,34.8l-4-11L0,30.5L16.4,8.7l5.4,15L23,7L23.8,7.1z M16.8,20.4l-1.5-4.3
    l-5.1,6.7L16.8,20.4z M34.4,25.4l-8.1-13.1L25,29.6L34.4,25.4z M35.2,13.2l8.1,13.1L70,9.9L35.2,13.2z"
          />
        </svg>
        <small>send</small>
      </button>
    </form>
  );
};
