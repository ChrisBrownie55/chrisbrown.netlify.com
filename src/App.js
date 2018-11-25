import React, { Suspense, useState, useEffect } from 'react';

import './style/main.css';
import './style/system-font.css';

import Hero from './views/Hero';

import MDSpinner from "react-md-spinner";
const About = React.lazy(() => import('./views/About'));
const Expertise = React.lazy(() => import('./views/Expertise'));
const ChallengeSolution = React.lazy(() => import('./views/ChallengeSolution'));
const MyWork = React.lazy(() => import('./views/MyWork'));
const Hire = React.lazy(() => import('./views/Hire'));
const Contact = React.lazy(() => import('./views/Contact'));

const Spinner = <MDSpinner style={{margin: "calc(20vh - 40px) calc(50vw - 40px)"}} size={80} singleColor="var(--theme-secondary)" />;

const MenuDrawer = React.lazy(() => import('./components/MenuDrawer'));
const SmoothScroll = React.lazy(() => import('./components/SmoothScroll'));

const App = () => {
  const [
    [hero, setHero],
    [about, setAbout],
    [expertise, setExpertise],
    [mywork, setMywork],
    [hire, setHire],
    [hireBefore, setHireBefore],
    [contact, setContact]
  ] = [
    useState(),
    useState(),
    useState(),
    useState(),
    useState(),
    useState(),
    useState()
  ];

  return (
    <main className="app-container">
      <Suspense fallback={
        <MDSpinner
        style={{position: 'absolute', top: '1rem', left: '1rem'}}
        size={10} singleColor="white" />
      }>
        <MenuDrawer sections={[ hero, about, expertise, mywork, hire, hireBefore, contact ]}>
          <SmoothScroll target=".about">
            <button>About</button>
          </SmoothScroll>
          <SmoothScroll target=".expertise">
            <button>Expertise</button>
          </SmoothScroll>
          <SmoothScroll target=".mywork">
            <button>My Work</button>
          </SmoothScroll>
          <SmoothScroll target=".hire">
            <button>Contact</button>
          </SmoothScroll>
          <SmoothScroll target=".contact">
            <button>Info</button>
          </SmoothScroll>
        </MenuDrawer>
      </Suspense>
      <Hero ref={setHero} />
      <Suspense fallback={Spinner}>
        <About ref={setAbout} />
      </Suspense>
      <Suspense fallback={Spinner}>
        <Expertise ref={setExpertise} />
      </Suspense>
      <Suspense fallback={Spinner}>
        <ChallengeSolution />
      </Suspense>
      <Suspense fallback={Spinner}>
        <MyWork ref={setMywork} />
      </Suspense>
      <Suspense fallback={Spinner}>
        <Hire ref={node => setHire(node) && setHireBefore(node.querySelector('.before'))} />
      </Suspense>
      <Suspense fallback={Spinner}>
        <Contact ref={setContact} />
      </Suspense>
    </main>
  );
};

export default App;
