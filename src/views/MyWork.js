import React, { forwardRef } from 'react';

import FlickitySlider from '../components/FlickitySlider';
import ImgCard from '../components/ImgCard';

const MyWork = forwardRef((props, ref) => (
  <section ref={ref} className="mywork">
    <h1 className="mywork__title title">My Work</h1>
    <FlickitySlider>
      <section className="slide">
        <ImgCard
          src={() => import('../assets/inspire-min.png')}
          alt="Inspire"
          href="https://chrisbrownie55.github.io/inspire/"
        >
          <strong>Inspire</strong> is a highly functional and customizeable homepage with numerous
          features:
          <ul>
            <li>Random high quality backgrounds from Pixabay</li>
            <li>A persistent todo checklist</li>
            <li>The current weather</li>
            <li>A random quote of the day</li>
            <li>And the current time</li>
          </ul>
        </ImgCard>
        <ImgCard
          src={() => import('../assets/vue-music-min.png')}
          alt="Vue Music"
          href="https://vusic.herokuapp.com"
        >
          <strong>Vue Music</strong> is a Spotify clone using the iTunes API. Here is a list of its
          features:
          <ul>
            <li>Searching songs by artist, album, and song name via iTunes.</li>
            <li>Music playback (iTunes API gives 30 second previews).</li>
            <li>Creation of playlists.</li>
            <li>Authentication and persistency built out using Node.js with MongoDB</li>
          </ul>
        </ImgCard>
        <ImgCard
          src={() => import('../assets/partyox-min.png')}
          alt="Party Ox"
          href="https://partyox.herokuapp.com"
        >
          <strong>Party Ox</strong> is a PWA that allows a DJ to receive, accept, and reject
          suggestions from members of their parties.
          <ul>
            <li>
              <i>Sockets</i> &mdash; used to instantly update the screen.
            </li>
            <li>
              <i>Node.js with Mongoose</i> &mdash; used to create persistency for user data.
            </li>
            <li>
              <i>Vue.js</i> &mdash; used to create seamless transitions between pages.
            </li>
          </ul>
        </ImgCard>
      </section>
      <section className="slide">
        <ImgCard
          src={() => import('../assets/stanager-min.png')}
          alt="Stanager"
          href="https://www.npmjs.com/package/stanager"
        >
          <strong>Stanager</strong> is an npm module that provides an immutable state manager. Here
          are its features:
          <ul>
            <li>
              <i>Immutability</i> &mdash; all data structures passed to Stanager are cloned
              recursively to prevent unwanted mutations.
            </li>
            <li>
              <i>Subscribers</i> &mdash; functions that <em>observe</em>
              your changes to the watched variable.
            </li>
            <li>
              <i>Modifiers</i> &mdash; functions that, like subscribers, observe your changes but
              also allow you to <em>mutate</em> the new value.
            </li>
          </ul>
        </ImgCard>
        <ImgCard
          src={() => import('../assets/battle-cards-min.png')}
          alt="Battle Cards"
          href="https://chrisbrownie55.github.io/battle-cards"
        >
          <strong>Battle Cards</strong> is a card fighting game in which the player selects one of
          their cards and one of the enemies to fight.
          <br />
          <br />I used Vue to manage different states and pages and animate transitions when cards
          fight. Along with this is the use of Axios to interact with the game&lsquo;s API.
        </ImgCard>
        <ImgCard
          src={() => import('../assets/keepr-min.png')}
          alt="Keepr"
          href="https://keepr1.herokuapp.com"
        >
          <strong>Keepr</strong> is a Full Stack clone of Pinterest. It was built using the
          following technologies:
          <ul>
            <li>
              <i>.NET</i> &mdash; used to create a web API, serve the static files, and interact
              with the database.
            </li>
            <li>
              <i>MySQL</i> &mdash; used to create, update, read, and delete from the database.
            </li>
            <li>
              <i>Vue</i> &mdash; used in conjunction with <i>Axios</i>.
            </li>
          </ul>
        </ImgCard>
      </section>
      <section className="slide">
        <ImgCard
          src={() => import('../assets/iacs-counselors-min.png')}
          alt="IACS Counselors"
          href="https://iacs-counselor.github.io/"
        >
          <strong>IACS Counselors</strong> is a static mobile-friendly website I designed,
          content-edited, and developed for the counselor&lsquo;s of IACS.
        </ImgCard>
        <ImgCard
          src={() => import('../assets/how-to-make-your-code-readable-min.png')}
          alt="How to Make Your Code Readable"
          href="https://medium.com/s/story/the-importance-of-readable-code-165895e939c7"
        >
          <strong>How to Make Your Code Readable</strong> is an article that I wrote on the
          importance of writing <i>&quot;clean code&quot;</i>. It was featured on Medium.com and has
          been read over ten thousand times.
        </ImgCard>
        <ImgCard
          src={() => import('../assets/franciscan-faculty-min.png')}
          alt="Franciscan React"
          href="https://github.com/fus-marcom/franciscan-react/pull/146"
        >
          I helped design and build several of the pages for{' '}
          <strong style={{ whiteSpace: 'nowrap' }}>Franciscan University&lsquo;s</strong> website
          using React. You can look at the pull request in the link below, or view the rest of my
          contributions on their repository.
        </ImgCard>
      </section>
    </FlickitySlider>
  </section>
));

export default React.memo(MyWork);
