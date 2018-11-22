import React from 'react';
import LazyImg from '../components/LazyImg';

const About = () => (
  <section className="about">
    <h1 className="title about__title">About Me</h1>
    <div className="about__content">
      <article>
        <LazyImg
          target=".about"
          src={() => import("../assets/senior1-min.jpg")}
          alt="A portrait photo of me"
          id="senior1"
        />
        <p>
          For the past few years, I have been working as a Web Developer in
          educational, professional, and hobbyist capacities. Over these years,
          in order to serve customers better, I have honed my skills as a
          Full Stack Web Developer.
        </p>
      </article>
      <article>
        <LazyImg
          target=".about"
          src={() => import("../assets/senior2-min.jpg")}
          alt="A headshot of me sitting on some steps"
          id="senior2"
        />
        <p>
          During my time as a Full Stack Web Developer, I have designed and
          developed many different projects that use the following frameworks: Vue, React, Node,
          and .NET. Along with
          this I am well-versed in the fundamentals of HTML, CSS, and JavaScript.
        </p>
      </article>
      <article>
        <LazyImg
          target=".about"
          src={() => import("../assets/graduation.svg")}
          alt="Graduation cap logo"
        />
        <p>
          I am also a graduate of Idaho Arts Charter school and&nbsp;
          <a href='https://boisecodeworks.com/'>Boise CodeWorks</a>. I am now
          currently working on personal projects while pursuing job opportunities
          in the field of Web Development.
        </p>
      </article>
      </div>
      </section>
);

export default About;
