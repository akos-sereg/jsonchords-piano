import * as React from 'react';
import styles from './style.scss';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div>
          <h1>About</h1>
          <p>
            This tool provides a way to capture piano sheets in JSON format. It can be useful if you
            want to ...
          </p>
          <ul>
            <li>
              <b>Learn to play a song</b>: sections (eg. intro, verse, refrain, outro) are defined
              clearly, so you can see the structure of the song while learning. You can also step
              from chord-to-chord, which I think is better than stop-pause cycles on a YouTube
              tutorial video.
            </li>
            <li>
              <b>Capture a song</b>: as someone who can not read musical sheets, I find it important
              to capture the songs that I have learned. In case I forget some part after a while -
              not playing the song -, it is easy to recap from this app.
            </li>
          </ul>

          <p>
            You can contribute, in case you play piano, understand JSON, and you can commit / push
            in git :)
          </p>
          <p>
            <b>Feel free to create a PR about the song you learned.</b>
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>akos.sereg@gmail.com</p>
          <p>
            <a href="https://github.com/akos-sereg/jsonchords-piano" target="out">
              https://github.com/akos-sereg/jsonchords-piano
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
