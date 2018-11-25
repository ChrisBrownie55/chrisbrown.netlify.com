import React, { useEffect, useRef, forwardRef } from 'react';
import ThemeButton from '../components/ThemeButton';
import SmoothScroll from '../components/SmoothScroll';

const Hero = forwardRef((props, ref) => {
  const headerRef = useRef();

  useEffect(() => {
    requestIdleCallback(async () => {
      try {
        await import('./../assets/header-background-min.jpg');
        headerRef.current.setAttribute('loaded', '');
        headerRef.current.addEventListener('transitionend', () => headerRef.current.style.background = 'unset')
      } catch (error) {
        console.warn('An error has occurred while fetching the background image', error);
      }
    });
  });

  function handleRefs(node) {
    headerRef.current = ref.current = node;
  }

  return (
    <header ref={handleRefs} className="hero">
      <svg className="logo primary" aria-label="My logo, the letter C in a square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <rect className="logo__square" x="15" y="15" width="370" height="370" rx="40" />
        <path className="logo__c" d="M198.4 82.4c-67.8 5-113.8 68.6-100 138.6 14.6 73.6 93.9 110.3 163.4 75.5 11-5.5 14.2-8.6 14.3-13.4 0-7.7-7.3-11.5-14.8-7.6a134.3 134.3 0 0 1-22.5 10.4c-56.1 18.6-111-13.3-120.8-70.3-10.8-63 29.2-114.5 89-114.5a97 97 0 0 1 52.6 14.6c9 5 16 2.4 16.3-5.9.3-5.5-3.3-9-15.3-15-19.8-9.8-40.5-14-62.2-12.4" />
      </svg>

      <h1 className="title hero__title">
        Hi, my name is Christopher Brown.
        <br />
        I engineer websites.
      </h1>

      <SmoothScroll target=".hire">
        <ThemeButton className="hero__hire-button" theme="dark">
          Yes, I'm available for hire
        </ThemeButton>
      </SmoothScroll>

      <SmoothScroll target=".about">
        <button className='hero__learn-more'>
          Learn More About What I Do
          <br />
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448'>
            <path d='M420.75 202l-185.5 185.25c-6.25 6.25-16.25 6.25-22.5 0l-185.5-185.25c-6.25-6.25-6.25-16.5 0-22.75l41.5-41.25c6.25-6.25 16.25-6.25 22.5 0l132.75 132.75 132.75-132.75c6.25-6.25 16.25-6.25 22.5 0l41.5 41.25c6.25 6.25 6.25 16.5 0 22.75z' />
          </svg>
        </button>
      </SmoothScroll>
    </header>
  );
});

export default React.memo(Hero);
