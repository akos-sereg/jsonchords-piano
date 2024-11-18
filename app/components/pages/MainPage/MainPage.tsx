import * as React from 'react';
import { useState, useContext } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsText from '../../widgets/JsonChordsText/JsonChordsText';
import JsonChordsTextContext from '../../widgets/JsonChordsText/JsonChordsTextContext';
import PlayingContext from '../../widgets/PlayControls/PlayingContext';
import styles from './style.scss';

const MainPage = () => {
    const { isValidJson, data } = useContext(JsonChordsTextContext);
    const { playingEpisode, playingChord, isPlaying } = useContext(PlayingContext);

    return (
       <div>
           <Piano displayNotes={data ? data.episodes[playingEpisode].chords[playingChord].chord : []} />
           <div className={styles.codeAndEpisodes}>
              <JsonChordsText />
              <div className={styles.episodes}>
                <PlayControls />
              </div>
           </div>
       </div>
   );

};

export default MainPage;
