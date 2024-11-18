import * as React from 'react';
import { useEffect, useContext } from 'react';
import styles from './styles.scss';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext';
import JsonValidationSectionMessage from '../JsonChordsText/JsonValidationSectionMessage';
import PlayingContext from './PlayingContext';

const PlayControls = () => {
    const { isValidJson, data } = useContext(JsonChordsTextContext);
    const {
        isPlaying,
        setPlaying,
        playingEpisode,
        setPlayingEpisode,
        setPlayingChord,
        playingChord,
    } = useContext(PlayingContext);

    const handlePlay = () => {
        setPlaying(true);
    }

    const handlePause = () => {
        setPlaying(false);
    }

    const handleEpisodeClick = (event: any, episodeIndex: number) => {
        event.stopPropagation();
        setPlayingEpisode(episodeIndex);
        setPlayingChord(0);
        setPlaying(false);
    }

    const handleChordClick = (event: any, chordIndex: number) => {
        event.stopPropagation();
        setPlayingChord(chordIndex);
        setPlaying(false);
    }

    useEffect(() => {
        document.getElementById(`chord-${playingChord}`)?.scrollIntoView(true);
    }, [playingChord]);

    return (
        <div>
            <div className={styles.container}>
                <button className="btn btn-primary" disabled={!isValidJson || isPlaying} onClick={handlePlay}>Play</button>
                <button className="btn btn-default" disabled={!isValidJson || !isPlaying} onClick={handlePause}>Pause</button>
            </div>
             <JsonValidationSectionMessage />
            {isValidJson ? (
                <div className={styles.episodeListAndChordSpinner}>
                    <div className={styles.episodeListContainer}>
                        <div className="list-group">
                          {data.episodes.map((episode: any, index: number) => (
                            <a
                                href="#"
                                className={`list-group-item ${index === playingEpisode ? 'active' : ''}`}
                                onClick={(e) => handleEpisodeClick(e, index)}
                            >{episode.title}</a>
                          ))}
                        </div>
                    </div>

                    <div className={styles.episodeListContainer}>
                        <div className="list-group">
                          {data.episodes[playingEpisode].chords.map((chordItem: any, index: number) => (
                            <a
                                id={`chord-${index}`}
                                href="#"
                                className={`list-group-item ${index === playingChord ? 'active' : ''}`}
                                onClick={(e) => handleChordClick(e, index)}
                            >{chordItem.chord.map((c: string) => `${c.split('-')[1]} `)}</a>
                          ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );

};

export default PlayControls;
