import * as React from 'react';
import { useEffect, useContext, useMemo } from 'react';
import styles from './styles.scss';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext';
import JsonValidationSectionMessage from '../JsonChordsText/JsonValidationSectionMessage';
import PlayingContext from './PlayingContext';
import { getFullLengthMs, getLengthMsUntil } from '../JsonChordsText/audioStatistics';

interface PlayControlsProps {
    disabled: boolean;
}

const PlayControls = ({ disabled } : PlayControlsProps) => {
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

    const initAlert = () => {
        alert('Please initialize piano notes first');
    }

    const handleEpisodeClick = (event: any, episodeIndex: number) => {
        event.stopPropagation();
        event.preventDefault();

        if (disabled) {
            initAlert();
            return;
        }

        setPlayingEpisode(episodeIndex);
        setPlayingChord(0);
        setPlaying(false);
    }

    const handleChordClick = (event: any, chordIndex: number) => {
        event.stopPropagation();
        event.preventDefault();

        if (disabled) {
            initAlert();
            return;
        }

        setPlayingChord(chordIndex);
        setPlaying(false);
    }

    useEffect(() => {
        if (isPlaying) {
            document.getElementById(`chord-${playingChord}`)?.scrollIntoView(true);
        }
    }, [playingChord, isPlaying]);

    const progress = useMemo(() => {
        const fullLength = getFullLengthMs(data);
        const elapsed = getLengthMsUntil(data, playingEpisode, playingChord);
        return (elapsed / fullLength) * 100;;
    }, [data, playingEpisode, playingChord]);

    return (
        <div>
            <div className={styles.container}>
                <button className="btn btn-primary" disabled={!isValidJson || isPlaying || disabled} onClick={handlePlay}>Play</button>
                <button className="btn btn-default" disabled={!isValidJson || !isPlaying || disabled} onClick={handlePause}>Pause</button>
            </div>
             <JsonValidationSectionMessage />
             {isValidJson ? (
                <div>
                    <div className={styles.episodeListAndChordSpinner}>
                        <div className={styles.listContainer}>
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

                        <div className={styles.listContainer}>
                            <div className="list-group">
                              {data.episodes[playingEpisode]?.chords.map((chordItem: any, index: number) => (
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
                    <div className={`progress ${styles.progress}`}>
                      <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}  style={{ width: `${progress}%` }}>
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                </div>
            ) : null}
        </div>
    );

};

export default PlayControls;
