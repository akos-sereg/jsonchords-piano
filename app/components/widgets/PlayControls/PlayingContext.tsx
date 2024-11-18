import * as React from 'react';
import { FC, createContext, useState, useMemo, useEffect, useContext } from 'react';
import JsonChordsTextContext from '../JsonChordsText/JsonChordsTextContext';

interface PlayingContextType {
    isPlaying: boolean;
    setPlaying: (isPlaying: boolean) => void;
    playingEpisode: number;
    setPlayingEpisode: (episode: number) => void;
    playingChord: number;
    setPlayingChord: (chord: number) => void;
}

const PlayingContext = createContext<PlayingContextType>({
    isPlaying: false,
    setPlaying: () => {},
    playingEpisode: 0,
    setPlayingEpisode: () => {},
    playingChord: 0,
    setPlayingChord: () => {}
});

export const PlayingContextProvider: FC = ({ children }) => {
    const { data } = useContext(JsonChordsTextContext);
    const [isPlaying, setPlaying] = useState(false);
    const [playingEpisode, setPlayingEpisode] = useState(0);
    const [playingChord, setPlayingChord] = useState(0);

    const context = useMemo(() => ({
        isPlaying,
        setPlaying,
        playingEpisode,
        setPlayingEpisode,
        playingChord,
        setPlayingChord,
    }), [isPlaying, setPlaying, setPlayingEpisode, playingEpisode, playingChord, setPlayingChord]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        setTimeout(() => {
            const nextPlayingChord = playingChord + 1;
            if (data.episodes[playingEpisode].chords.length > nextPlayingChord) {
                console.log('--> next chord', nextPlayingChord);
                setPlayingChord(nextPlayingChord);
                return;
            }

            const nextEpisode = playingEpisode + 1;
            if (data.episodes.length > nextEpisode) {
                console.log('--> next episode', nextEpisode);
                setPlayingChord(0);
                setPlayingEpisode(nextEpisode);
                return;
            }
        }, data.episodes[playingEpisode].chords[playingChord].interval);

    }, [isPlaying, playingEpisode, playingChord]);

    return (
        <PlayingContext.Provider value={context}>
            {children}
        </PlayingContext.Provider>
    );
};

export default PlayingContext;