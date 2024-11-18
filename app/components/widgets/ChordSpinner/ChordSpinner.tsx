import * as React from 'react';
import { useContext } from 'react';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext';
import PlayingContext from '../PlayControls/PlayingContext';
import styles from './styles.scss';

const ChordSpinner = () => {
    const { isValidJson, data } = useContext(JsonChordsTextContext);
    const { isPlaying, playingEpisode, playingChord } = useContext(PlayingContext);

    let startIndex = playingChord - 3;
    if (startIndex < 0) {
        startIndex = 0;
    }

    let endIndex = playingChord + 3;
    if (endIndex >= data.episodes[playingEpisode].chords.length - 1) {
        endIndex = data.episodes[playingEpisode].chords.length - 1;
    }

    return (
        <div>
            {data.episodes[playingEpisode].chords.map((chordItem: any, index: number) => (
               <>
                   {index >= startIndex && index <= endIndex ? (
                       <div className={index === playingChord ? styles.activeChord : styles.inactiveChord}>
                           {chordItem.chord}
                       </div>
                   ) : (
                       <></>
                   )}
               </>
           ))}
        </div>
    );
};

export default ChordSpinner;
