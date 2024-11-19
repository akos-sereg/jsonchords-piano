import * as React from 'react';
import { useState, useContext, useMemo } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsText from '../../widgets/JsonChordsText/JsonChordsText';
import JsonChordsTextContext from '../../widgets/JsonChordsText/JsonChordsTextContext';
import PlayingContext from '../../widgets/PlayControls/PlayingContext';
import styles from './style.scss';

const MainPage = () => {
    const { isValidJson, data } = useContext(JsonChordsTextContext);
    const { playingEpisode, playingChord, isPlaying } = useContext(PlayingContext);

    const displayedNotes = useMemo(() => {
        try {
            return data ? data.episodes[playingEpisode].chords[playingChord].chord : [];
        } catch (error) {
            return [];
        }
    }, [data, playingEpisode, playingChord]);

    return (
       <div>
           <Piano displayNotes={displayedNotes} />
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
