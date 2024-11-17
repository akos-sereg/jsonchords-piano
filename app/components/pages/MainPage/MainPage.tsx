import * as React from 'react';
import { useState, useContext } from 'react';
import Piano from '../../widgets/Piano/Piano';
import PlayControls from '../../widgets/PlayControls/PlayControls';
import JsonChordsText from '../../widgets/JsonChordsText/JsonChordsText';
import JsonChordsTextContext from '../../widgets/JsonChordsText/JsonChordsTextContext';
import styles from './style.scss';

const MainPage = () => {
    const { isValidJson, data } = useContext(JsonChordsTextContext);

    return (
       <div>
           <Piano displayNotes={['O5-G', 'O2-C', "O4-A#"]} />
           <div className={styles.codeAndEpisodes}>
              <JsonChordsText />
              <div className={styles.episodes}>
                <PlayControls />
                {isValidJson ? (
                    <div>
                        <select>
                            {data.episodes.map((episode: any, index: number) => (
                               <option key={index}>
                                     {episode.title}
                               </option>
                             ))}
                        </select>
                    </div>
                ) : null}
              </div>
           </div>
       </div>
   );

};

export default MainPage;
