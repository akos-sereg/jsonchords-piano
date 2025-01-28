import * as React from 'react';
import styles from './style.scss';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Motivation</h1>
            <p>
              I started to learn playing the piano from YouTube, and Flowkey app. Reading piano
              sheets is too complex for me, and I wanted to find a way to capture the songs that I
              have already learned: in case I forgot some parts, I would have a chance to recap.
            </p>
            <p>As a software developer, JSON format was a suitable option.</p>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-body">
            <h1>How it works</h1>
            This site is mainly for people with software development skills who play piano. However,
            JSON is not so hard to write, so you can assemble "sheets" even if you are not familiar
            with JSON data format. The editor will go red when the format is not correct, and the
            background turns black again when it is. You also have some songs for reference, under
            menu item "Songs".
            <p>In case you want to build this site, by adding your jsonchords:</p>
            <ul className={styles.aboutList}>
              <li>
                You need to know how to <b>clone a repository</b> and create a Pull Request on
                GitHub. In case you are not familiar with it, just send your JSON text{' '}
                <b>to my email</b> address, and I will upload it: akos.sereg@gmail.com
              </li>
              <li>
                Click on any song from "Song" menu item, and <b>start editing</b>. It will not
                impact the stored song, but your changes will be saved on localStorage (that's a
                built-in storage in your browser), so next time you visit the site, it will be
                there.
              </li>
              <li>
                Once you are ready, clone this repo, add your .json file to
                server/static/sheets/full folder, <b>create a PR</b>&nbsp; (or just send me the JSON
                text), and I will take care of the <b>deploying</b> part.
              </li>
            </ul>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Contact</h1>
            <p>Email: akos.sereg@gmail.com</p>
            <p>
              GitHub:{' '}
              <a href="https://github.com/akos-sereg/jsonchords-piano" target="out">
                https://github.com/akos-sereg/jsonchords-piano
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
