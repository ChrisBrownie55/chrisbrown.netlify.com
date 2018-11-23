import React from 'react';

import './style/main.css';
import './style/system-font.css';

import Hero from './views/Hero';
const About = React.lazy(() => import('./views/About'));
const Expertise = React.lazy(() => import('./views/Expertise'));
const ChallengeSolution = React.lazy(() => import('./views/ChallengeSolution'));
const MyWork = React.lazy(() => import('./views/MyWork'));
const Hire = React.lazy(() => import('./views/Hire'));
const Contact = React.lazy(() => import('./views/Contact'));

const App = () => {
  return (
    <main className="app-container">
      <Hero></Hero>
      <React.Suspense fallback={<p>Loading...</p>}>
        <About></About>
      </React.Suspense>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Expertise></Expertise>
      </React.Suspense>
      <React.Suspense fallback={<p>Loading...</p>}>
        <ChallengeSolution></ChallengeSolution>
      </React.Suspense>
      <React.Suspense fallback={<p>Loading...</p>}>
        <MyWork></MyWork>
      </React.Suspense>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Hire></Hire>
      </React.Suspense>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Contact></Contact>
      </React.Suspense>
    </main>
  );
};

export default App;
