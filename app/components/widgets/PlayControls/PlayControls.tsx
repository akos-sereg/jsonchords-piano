import * as React from 'react';
import { useEffect, useContext } from 'react';
import styles from './styles.scss';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext'
import PlayingContext from './PlayingContext'

const PlayControls = () => {
    const { isValidJson } = useContext(JsonChordsTextContext);
    const { isPlaying, setPlaying } = useContext(PlayingContext);

    const handlePlay = () => {
        console.log('--> set Playing: true');
        setPlaying(true);
    }

     const handlePause = () => {
        setPlaying(false);
    }

    return (
        <div className={styles.container}>
            <button className="btn btn-primary" disabled={!isValidJson} onClick={handlePlay}>Play</button>
            <button className="btn btn-default" disabled={!isValidJson} onClick={handlePause}>Pause</button>
            <button className="btn btn-default" disabled={!isValidJson}>&lt; Previous</button>
            <button className="btn btn-default" disabled={!isValidJson}>Next &gt;</button>
        </div>
    );

};

export default PlayControls;
