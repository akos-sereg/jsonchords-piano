import * as React from 'react';
import { useState } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsText from '../../widgets/JsonChordsText/JsonChordsText';
import styles from './style.scss';

const MainPage = () => {
    return (
       <div>
           <Piano displayNotes={['O5-G', 'O2-C', "O4-A#"]} />
           <PlayControls />
           <div className={styles.codeAndEpisodes}>
              <JsonChordsText />
              <div className={styles.episodes}>hello</div>
           </div>
       </div>
   );

};

export default MainPage;
