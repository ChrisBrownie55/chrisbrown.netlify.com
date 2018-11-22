import React from 'react';

import './style/main.css';
import './style/system-font.css';

import Hero from './views/Hero';
const About = React.lazy(() => import('./views/About'));
const Expertise = React.lazy(() => import('./views/Expertise'));
const ChallengeSolution = React.lazy(() => import('./views/ChallengeSolution'));

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
    </main>
  );
};

export default App;
