import * as React from 'react';
import styles from './style.scss';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <h1>Motivation</h1>

                <p>
                    As a software developer, in my mid 30s I started to learn play the piano. I had limited understanding
                    on piano sheets, so I started to learn songs from YouTube videos and Flowkey. I wanted to make sure
                    that I can capture the songs I have learned, in order to be able to recap in case I forget some chords.
                </p>
                <p>
                    ... and JSON is good format for a developer, so here we go, <b>jsonchords</b>.
                </p>
                <h1>How it works</h1>
                This site is mainly for people with software development skills who play piano. However, JSON is not so hard to write,
                so you can assemble "sheets" even if you are not familiar with JSON data format. The editor will go red when the
                format is not correct, and the background turns black again when it is. You also have some songs for reference, under
                menu item "Songs".

                <p>
                    In case you want to build this site, by adding your jsonchords:
                </p>
                <ul>
                    <li>
                        You need to know how to <b>clone a repository</b> and create a Pull Request on GitHub. In case you are not familiar with it,
                        just send your JSON text <b>to my email</b> address, and I will upload it: akos.sereg@gmail.com
                    </li>
                    <li>
                        Click on any song from "Song" menu item, and <b>start editing</b>. It will not impact the stored song, but your changes will
                        be saved on localStorage (that's a built-in storage in your browser), so next time you visit the site, it will be there.
                    </li>
                    <li>
                        Once you are ready, clone this repo, add your .json file to server/static/sheets/full folder, <b>create a PR</b>&nbsp;
                        (or just send me the JSON text), and I will take care of the <b>deploying</b> part.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;
