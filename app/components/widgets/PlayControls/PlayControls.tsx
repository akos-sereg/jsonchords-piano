import * as React from 'react';
import { useEffect, useContext } from 'react';
import styles from './styles.scss';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext'
import PlayingContext from './PlayingContext'

const PlayControls = () => {
    const { isValidJson, data } = useContext(JsonChordsTextContext);
    const {
        isPlaying,
        setPlaying,
        playingEpisode,
        setPlayingEpisode,
        setPlayingChord,
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

    return (
        <div>
            <div className={styles.container}>
                <button className="btn btn-primary" disabled={!isValidJson || isPlaying} onClick={handlePlay}>Play</button>
                <button className="btn btn-default" disabled={!isValidJson || !isPlaying} onClick={handlePause}>Pause</button>
                <button className="btn btn-default" disabled={!isValidJson}>&lt; Previous</button>
                <button className="btn btn-default" disabled={!isValidJson}>Next &gt;</button>
            </div>
            {isValidJson ? (
                <div>
                    Episodes
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
                </div>
            ) : null}
        </div>
    );

};

export default PlayControls;
