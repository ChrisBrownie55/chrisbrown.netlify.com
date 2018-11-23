import React from 'react';

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

const App = () => {
  return (
    <main className="app-container">
      <Hero></Hero>
      <React.Suspense fallback={Spinner}>
        <About></About>
      </React.Suspense>
      <React.Suspense fallback={Spinner}>
        <Expertise></Expertise>
      </React.Suspense>
      <React.Suspense fallback={Spinner}>
        <ChallengeSolution></ChallengeSolution>
      </React.Suspense>
      <React.Suspense fallback={Spinner}>
        <MyWork></MyWork>
      </React.Suspense>
      <React.Suspense fallback={Spinner}>
        <Hire></Hire>
      </React.Suspense>
      <React.Suspense fallback={Spinner}>
        <Contact></Contact>
      </React.Suspense>
    </main>
  );
};

export default App;
