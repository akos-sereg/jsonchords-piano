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
    const { data, isValidJson } = useContext(JsonChordsTextContext);
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
        if (!isValidJson) {
            return;
        }

        if (playingEpisode < data.episodes.length && playingChord < data.episodes[playingEpisode].chords.length) {
            return;
        }

        setPlayingEpisode(0);
        setPlayingChord(0);
    }, [data, isValidJson, setPlayingEpisode, setPlayingChord, playingChord, playingEpisode]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        setTimeout(() => {
            const nextPlayingChord = playingChord + 1;
            if (data.episodes[playingEpisode].chords.length > nextPlayingChord) {
                setPlayingChord(nextPlayingChord);

                if (data.episodes.length -1 === playingEpisode && data.episodes[playingEpisode].chords.length -1 === nextPlayingChord) {
                    setPlaying(false);
                }
                return;
            }

            const nextEpisode = playingEpisode + 1;
            if (data.episodes.length > nextEpisode) {
                setPlayingEpisode(nextEpisode);
                return;
            }

            setPlaying(false);
        }, data?.episodes[playingEpisode]?.chords[playingChord]?.interval ?? 300);

    }, [isPlaying, playingEpisode, playingChord]);

    return (
        <PlayingContext.Provider value={context}>
            {children}
        </PlayingContext.Provider>
    );
};

export default PlayingContext;