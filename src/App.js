import React from 'react';

import './style/main.css';
import './style/system-font.css';

import Hero from './views/Hero';
const About = React.lazy(() => import('./views/About'));

const App = () => {
  return (
    <main className="app-container">
      <Hero></Hero>
      <React.Suspense fallback={<p>Loading...</p>}>
        <About></About>
      </React.Suspense>
    </main>
  );
};

export default App;
