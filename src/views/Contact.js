import React from 'react';

import SocialMediaLink from '../components/SocialMediaLink';
const ThemedLink = props => <SocialMediaLink theme="dark" {...props}></SocialMediaLink>;

export default React.memo(() => (
  <footer className="contact">
    <svg className="logo secondary" aria-label="My logo, the letter C in a square" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400">
      <rect className="logo__square" x="15" y="15" width="370" height="370" rx="40" />
      <path className="logo__c" d="M198.4 82.4c-67.8 5-113.8 68.6-100 138.6 14.6 73.6 93.9 110.3 163.4 75.5 11-5.5 14.2-8.6 14.3-13.4 0-7.7-7.3-11.5-14.8-7.6a134.3 134.3 0 0 1-22.5 10.4c-56.1 18.6-111-13.3-120.8-70.3-10.8-63 29.2-114.5 89-114.5a97 97 0 0 1 52.6 14.6c9 5 16 2.4 16.3-5.9.3-5.5-3.3-9-15.3-15-19.8-9.8-40.5-14-62.2-12.4" />
    </svg>

    <h1 className="footer__title">
      <span className="no-break">Get in contact or</span>
      <span className="no-break">see what I'm up to.</span>
    </h1>

    <article>
      <ThemedLink href="https://www.facebook.com/chbchb55" title="Check out my Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9 -1 54 74">
          <path d="M36 0v14.4h-7.2c-2.484 0-3.6 2.916-3.6 5.4v9H36v14.4H25.2V72H10.8V43.2H0V28.8h10.8V14.4C10.8 6.447 17.247 0 25.2 0H36" />
        </svg>
      </ThemedLink>
      <ThemedLink href="https://github.com/ChrisBrownie55" title="View my Github">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 74 74">
          <path d="M8 0h56a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H46.24c-1.28-.28-1.32-2.72-1.32-3.56l.04-9.88c0-3.36-1.16-5.56-2.44-6.68C50.56 51 58.96 48 58.96 34.12c0-3.92-1.4-7.16-3.68-9.68.36-.88 1.6-4.56-.36-9.52 0 0-3.04-.92-9.92 3.72-2.88-.8-5.92-1.2-9-1.24-3.04.04-6.16.44-9 1.24-6.88-4.64-9.92-3.72-9.92-3.72-1.96 4.96-.72 8.64-.36 9.52-2.28 2.52-3.68 5.76-3.68 9.68C13.04 48 21.44 51 29.44 52c-1.04.8-1.96 2.4-2.28 4.72-2.08.92-7.28 2.52-10.48-3 0 0-1.92-3.44-5.52-3.72 0 0-3.52 0-.24 2.2 0 0 2.36 1.12 4 5.28 0 0 2.08 7 12.12 4.84l.04 6.12c0 .84-.08 3.28-1.36 3.56H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8" />
        </svg>
      </ThemedLink>
      <ThemedLink href="mailto:chbphone55@gmail.com" title="Send me an email">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 74 72">
          <path d="M7.2 26.612L36 44.69l28.8-18.078L36 8.533 7.2 26.612m64.8 0v36.157C72 66.762 68.776 70 64.8 70H7.2C3.224 70 0 66.762 0 62.769V26.612c0-2.64 1.404-4.918 3.492-6.183L36 0l32.508 20.429C70.596 21.694 72 23.972 72 26.612" />
        </svg>
      </ThemedLink>
      <ThemedLink href="https://codpen.io/chbchb55" title="View my CodePens">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 74 74">
          <path d="M47.124 36L36 43.488v.036L24.876 36 36 28.512 47.124 36M36 0c-.576 0-1.152.216-1.692.54L1.8 21.996c-.828.396-1.476 1.152-1.8 2.016v22.5c0 1.476 0 1.476.54 2.196l33.768 22.788c.504.36 1.116.504 1.692.504a2.95 2.95 0 0 0 1.692-.54L71.46 48.6c.54-.612.54-.612.54-2.088v-22.5a3.741 3.741 0 0 0-1.8-2.052L37.692.54C37.152.18 36.576 0 36 0m16.488 39.6l10.836 7.344L38.988 63.36V48.708l13.5-9.108m11.196-14.76L52.488 32.4l-13.5-9.108V8.568L63.684 24.84m2.304 5.652v11.016L57.852 36l8.136-5.508M19.512 39.6l13.5 9.144V63.36L8.676 46.944 19.512 39.6M8.316 24.84L33.012 8.604V23.4l-13.5 9-11.196-7.56M6.012 30.6l8.136 5.4-8.136 5.544V30.6" />
        </svg>
      </ThemedLink>
      <ThemedLink href="https://www.linkedin.com/in/chrisbrownie55" title="Check out my LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 74 74">
          <path d="M72 72H56V45c0-4.24-4.76-7.76-9-7.76s-7 3.52-7 7.76v27H24V24h16v8c2.64-4.28 9.44-7.04 14-7.04 10 0 18 8.16 18 18.04v29m-56 0H0V24h16v48M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0" />
        </svg>
      </ThemedLink>
      <ThemedLink href="https://twitter.com/ChrisHBrown55" title="Check out my Twitter feed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 74 59">
          <path d="M72 6.941c-2.65 1.215-5.507 2.013-8.467 2.395a14.898 14.898 0 0 0 6.47-8.26c-2.856 1.735-6.022 2.95-9.36 3.644C57.922 1.735 54.102 0 49.766 0 41.679 0 35.07 6.664 35.07 14.889c0 1.18.137 2.325.378 3.401-12.252-.625-23.162-6.56-30.424-15.548a14.825 14.825 0 0 0-1.996 7.462c0 5.17 2.58 9.752 6.573 12.355-2.443 0-4.715-.694-6.711-1.735v.104c0 7.218 5.094 13.257 11.84 14.61-1.24.348-2.547.521-3.89.521-.929 0-1.858-.104-2.753-.277 1.858 5.865 7.262 10.238 13.767 10.342C16.83 50.15 10.463 52.51 3.51 52.51c-1.17 0-2.34-.07-3.511-.208A41.545 41.545 0 0 0 22.646 59c27.12 0 42.023-22.698 42.023-42.376 0-.66 0-1.284-.034-1.943 2.89-2.083 5.369-4.72 7.365-7.74" />
        </svg>
      </ThemedLink>
    </article>

    <small aria-label="copyright">
      © <time dateTime="2018">2018</time> Christopher H. Brown
    </small>
  </footer>
));
